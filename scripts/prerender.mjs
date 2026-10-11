// Writes a real HTML file for every page so search engines and link previews
// see the headline, content, title and description without running JavaScript.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const dist = resolve('dist')
const { render, PAGE_META } = await import(pathToFileURL(resolve('dist-server/entry-server.js')).href)
const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function withMeta(html, meta) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${esc(meta.description)}"`)
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${meta.canonical}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${meta.canonical}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${esc(meta.title)}"`)
    .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${esc(meta.description)}"`)
    .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${esc(meta.title)}"`)
    .replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${esc(meta.description)}"`)
}

// Route -> output file (cleanUrls in vercel.json serves /services from services.html)
const pages = { '/': 'index.html', '/services': 'services.html', '/about': 'about.html', '/contact': 'contact.html', '/book': 'book.html', '/privacy': 'privacy.html', '/voisy': 'voisy.html', '/404': '404.html' }

for (const [route, file] of Object.entries(pages)) {
  const body = await render(route)
  let html = withMeta(template, PAGE_META[route]).replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  // Keep the not-found page out of search results
  if (route === '/404') html = html.replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex" />')
  if (!/<h1[\s>]/.test(body)) throw new Error(`Prerender of ${route} has no <h1>`)
  writeFileSync(resolve(dist, file), html)
  console.log(`prerendered ${route} -> ${file} (${Math.round(html.length / 1024)} KB)`)
}

rmSync(resolve('dist-server'), { recursive: true, force: true })

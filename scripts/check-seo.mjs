// Run after npm run build; checks the HTML actually served to crawlers.
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = (file) => readFileSync(new URL(`../dist/${file}`, import.meta.url), 'utf8')
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<')
const urls = [...read('sitemap.xml').matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
const titles = new Set()
const descriptions = new Set()

for (const url of [...urls, null]) {
  const path = url ? new URL(url).pathname : '/404'
  const html = read(path === '/' ? 'index.html' : `${path.slice(1)}.html`)
  const meta = (key) => {
    const matches = [...html.matchAll(new RegExp(`<meta (?:name|property)="${key}" content="([^"]*)"`, 'g'))]
    assert.equal(matches.length, 1, `${path}: exactly one ${key}`)
    return decode(matches[0][1])
  }
  const titleMatches = [...html.matchAll(/<title>(.*?)<\/title>/g)]
  assert.equal(titleMatches.length, 1)
  const title = decode(titleMatches[0][1])
  const description = meta('description')
  assert(!titles.has(title), `${path}: duplicate title`)
  assert(!descriptions.has(description), `${path}: duplicate description`)
  titles.add(title)
  descriptions.add(description)
  for (const prefix of ['og', 'twitter']) {
    assert.equal(meta(`${prefix}:title`), title)
    assert.equal(meta(`${prefix}:description`), description)
    assert.equal(meta(`${prefix}:image`), 'https://four2labs.com/og-banner.png')
    assert(meta(`${prefix}:image:alt`).includes('Four2Labs'))
  }
  const canonical = [...html.matchAll(/<link rel="canonical" href="([^"]*)"/g)]
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]))
  for (const type of ['Organization', 'WebSite']) {
    const nodes = schemas.filter((s) => s['@type'] === type)
    assert.equal(nodes.length, 1)
    assert.equal(nodes[0].name, 'Four2Labs')
    assert.equal(nodes[0].url, 'https://four2labs.com/')
  }
  const pages = schemas.filter((s) => ['WebPage', 'AboutPage', 'ContactPage'].includes(s['@type']))
  if (url) {
    assert.equal(canonical.length, 1)
    assert.equal(canonical[0][1], url)
    assert.equal(meta('og:url'), url)
    assert(!meta('robots').includes('noindex'))
    assert.equal(pages.length, 1)
    assert.equal(pages[0].url, url)
    assert.equal(pages[0].name, title)
    assert.equal(pages[0].description, description)
    assert.equal(pages[0]['@type'], path === '/about' ? 'AboutPage' : path === '/contact' ? 'ContactPage' : 'WebPage')
    if (path === '/services') assert.equal(pages[0].mainEntity['@type'], 'ItemList')
    if (path === '/voisy') assert.equal(pages[0].mainEntity['@id'], 'https://four2labs.com/voisy#service')
  } else {
    assert.equal(canonical.length, 0)
    assert(!html.includes('property="og:url"'))
    assert(meta('robots').includes('noindex'))
    assert.equal(pages.length, 0)
  }
  assert(/<h1[\s>]/.test(html), `${path}: prerendered content missing`)
  assert(!html.includes('name="keywords"'))
  console.log(`PASS ${path}: metadata, canonical, indexing and JSON-LD`)
}

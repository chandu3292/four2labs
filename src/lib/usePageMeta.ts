import { useEffect } from 'react'
import { pageSchema, robotsFor, serializeSchema, type PageMeta } from './meta'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!href) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function usePageMeta({ title, description, canonical, noindex, pageType, mainEntity, keywords }: PageMeta) {
  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    if (canonical) setMeta('property', 'og:url', canonical)
    else document.head.querySelector('meta[property="og:url"]')?.remove()
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'robots', robotsFor({ title, description, canonical, noindex }))
    setLink('canonical', canonical)
    const schema = pageSchema({ title, description, canonical, noindex, pageType, mainEntity, keywords })
    let script = document.getElementById('page-schema') as HTMLScriptElement | null
    if (!schema) {
      script?.remove()
    } else {
      if (!script) {
        script = document.createElement('script')
        script.id = 'page-schema'
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = serializeSchema(schema)
    }
  }, [title, description, canonical, noindex, pageType, mainEntity, keywords])
}

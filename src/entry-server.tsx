import { Writable } from 'node:stream'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

export { PAGE_META } from './lib/meta'

// Renders one route to HTML at build time, waiting for lazily loaded pages to finish
export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = ''
    const sink = new Writable({
      write(chunk, _enc, done) { html += chunk.toString(); done() },
      final(done) { resolve(html); done() },
    })
    const stream = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onAllReady() { stream.pipe(sink) },
        onError(err) { reject(err) },
      },
    )
  })
}

const {createBundleRenderer} = require('vue-server-renderer')
const zlib = require('zlib')
const accepts = require('accepts')

const ssrRenderer = function(clientManifest, serverBundle, template) {
  const renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest,
    inject: false,
    runInNewContext: false,
  })

  const render = (request, response, context) => {
    response.setHeader('Content-Type', 'text/html')

    let stream = renderer.renderToStream(context)
    stream.on('error', (error) => {
      if (error.code === 404) {
        // Things failed. Recursively re-render 404.
        response.statusCode = 404
        render(request, response, {
          url: '/404',
          fullUrl: 'https://' + request.headers.host + request.url,
        })
      } else {
        console.error(error)
        response.statusCode = 500
        response.send('Unknown error rendering content')
      }
    })

    if (accepts(request).encoding(['br'])) {
      response.setHeader('Content-Encoding', 'br')
      stream = stream.pipe(zlib.createBrotliCompress())
    }
    stream.pipe(response)
  }

  return render
}

module.exports = ssrRenderer

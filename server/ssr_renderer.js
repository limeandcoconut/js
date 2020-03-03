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

  const render = (request, res, context) => {
    res.setHeader('Content-Type', 'text/html')

    let stream = renderer.renderToStream(context)
    stream.on('error', (error) => {
      if (error.code === 404) {
        // Things failed. Recursively re-render 404.
        res.statusCode = 404
        render(request, res, {
          url: '/404',
          fullUrl: 'https://' + request.headers.host + request.url,
        })
      } else {
        // TODO: Shouldn't this be a 500?
        console.error(error)
        res.send('Unknown error rendering content')
      }
    })

    if (accepts(request).encoding(['br'])) {
      res.setHeader('Content-Encoding', 'br')
      stream = stream.pipe(zlib.createBrotliCompress())
    }
    stream.pipe(res)
  }

  return render
}

module.exports = ssrRenderer

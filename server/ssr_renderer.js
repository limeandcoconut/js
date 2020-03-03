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

    const render = (req, res, context) => {
        res.setHeader('Content-Type', 'text/html')

        let stream = renderer.renderToStream(context)
        stream.on('error', (err) => {
            if (err.code === 404) {
                // Things failed. Recursively re-render 404.
                res.statusCode = 404
                render(req, res, {
                    url: '/404',
                    fullUrl: 'https://' + req.headers.host + req.url,
                })
            } else {
                // TODO: Shouldn't this be a 500?
                console.error(err)
                res.send('Unknown error rendering content')
            }
        })

        if (accepts(req).encoding(['br'])) {
            res.setHeader('Content-Encoding', 'br')
            stream = stream.pipe(zlib.createBrotliCompress())
        }
        stream.pipe(res)
    }

    return render
}

module.exports = ssrRenderer

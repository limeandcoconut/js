const path = require('path')
const fs = require('fs')
const express = require('express')
const helmet = require('helmet')
const expressStaticGzip = require('express-static-gzip')
const app = express()
const {frontendPort} = require('../config.js')
const bodyParser = require('body-parser')

// Apply some useful plugins like helmet (security) and bodyParser (post param decoding)
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Service workers should be loaded from / instead of a directory like /dist/
app.use('/service-worker.js', express.static(path.resolve(__dirname, '../dist/service-worker.js')))

app.use('/', expressStaticGzip(path.resolve(__dirname, '../', 'public'), {
    enableBrotli: true,
    indexFromEmptyFile: false,
}))

app.use('/dist/', expressStaticGzip(path.resolve(__dirname, '../', 'dist'), {
    enableBrotli: true,
    indexFromEmptyFile: false,
}))

let render

// If in development, load resources from HMR server.
if (process.env.NODE_ENV === 'development') {
    console.log('Running in development mode!')

    // Set default render in case there is a request before inital pack.
    render = (req, res) => res.send('Compiling, reload in a moment.')

    // Add hot middleware and create a new render function each time both client and server have finished packing.
    require('./hmr.js')(app, (serverBundle, clientManifest, template) => {
        render = require('./ssr_renderer.js')(clientManifest, serverBundle, template)
    })

// If in production, load the client and server files to be served.
} else {
    console.log('Server is running in production mode')

    const template = fs.readFileSync(path.resolve('./dist/index.html'), 'utf8')
    const serverBundle = require('../dist/vue-ssr-server-bundle.json')
    const clientManifest = require('../dist/vue-ssr-client-manifest.json')
    render = require('./ssr_renderer.js')(clientManifest, serverBundle, template)
}

// TODO move default meta somewhere
// TODO comment on why default meta exists
app.get('*', (req, res) => {
    const context = {
        url: req.url,
        meta: {
            title: 'Default Title',
        },
        fullUrl: 'https://' + req.get('host') + req.originalUrl,
    }

    render(req, res, context)
})

app.listen(frontendPort, (err) => {
    if (err) {
        throw err
    }
    console.log(`Listening on port ${frontendPort}`)
})

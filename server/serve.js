const path = require('path')
const fs = require('fs')
const express = require('express')
const expressStaticGzip = require('express-static-gzip')
const featurePolicy = require('feature-policy')
const csp = require('helmet-csp')
const frameguard = require('frameguard')
// const hsts = require('hsts')
const ieNoOpen = require('ienoopen')
const noSniff = require('dont-sniff-mimetype')
const xssFilter = require('x-xss-protection')
const app = express()
const {
    frontendPort,
} = require('../config.js')
const isDevelopment = (process.env.NODE_ENV === 'development')

let nonce

// In prod this will be done by HAProxy via rewrites
if (isDevelopment) {
    // The caching service worker must be loaded from / to be allowed to cache everything necessary
    app.use('/service-worker.js', express.static(path.resolve(__dirname, '../dist/proxy_to_site_root/service-worker.js')))
} else {
    // Generate a 128 bit pseudo random base 64 nonce
    // https://www.w3.org/TR/CSP2/#nonce_value
    nonce = require('crypto').randomBytes(16).toString('base64')

    // Don't bother with security on dev
    // Setup feature policy
    const contentNone = ['\'none\'']
    app.use(featurePolicy({
        features: {
            camera: [...contentNone],
            geolocation: [...contentNone],
            microphone: [...contentNone],
            payment: [...contentNone],
        },
    }))

    // Set up content-security-policy
    const contentSelf = ['\'self\'', 'jacobsmith.tech', 'blob:', 'data:']
    const contentAnalytics = ['*.google-analytics.com', 'google-analytics.com']
    const contentFonts = ['*.fonts.gstatic.com', 'fonts.gstatic.com']
    app.use(csp({
        directives: {
            defaultSrc: [...contentSelf, ...contentAnalytics],
            // Remember this will need to be updated every time the inline script tag is edited.
            scriptSrc: [...contentSelf, ...contentAnalytics, `'nonce-${nonce}'`, "'sha256-KfmBIKliAyT0hcce3Q000DjjNOOAiP6NY/LFokeGtoM='"],
            styleSrc: [...contentSelf, "'unsafe-inline'"],
            fontSrc: [...contentSelf, ...contentFonts],
            imgSrc: [...contentSelf, ...contentAnalytics],
            prefetchSrc: [...contentSelf, ...contentFonts],
            connectSrc: [...contentSelf, ...contentAnalytics],
            // TODO: Add a report URI if you like
            // reportUri
        },
    }))


    // Prevent iframes embedding this page
    app.use(frameguard({action: 'deny'}))
    // Hide express
    app.disable('x-powered-by')

    // Set up hsts
    // Sets "Strict-Transport-Security: max-age=5184000; includeSubDomains".
    // const sixtyDaysInSeconds = 5184000
    // app.use(hsts({
    //   maxAge: sixtyDaysInSeconds
    // }))

    // Used for an old ie thing
    app.use(ieNoOpen())
    // Don't sniff mimetype
    app.use(noSniff())

    // Prevent xss reflection
    // Sets "X-XSS-Protection: 1; mode=block".
    app.use(xssFilter())
    // TODO: Add reporting
    // app.use(xssFilter({ reportUri: '/report-xss-violation' }))
}

// Serve any static files in public
// Could also replace with nginx if there's a need
app.use('/', expressStaticGzip(path.resolve(__dirname, '../', 'public'), {
    enableBrotli: true,
    indexFromEmptyFile: false,
    serveStatic: {
        setHeaders(response, path) {
            // For best results manifest.json must be served with application/manifest+json
            if (/\/public\/manifest\.json\W?/.test(path)) {
                response.set('Content-Type', 'application/manifest+json; charset=UTF-8')
            }
        },
    },
    orderPreference: ['br'],
}))

// Serve compiled resources
app.use('/dist/', expressStaticGzip(path.resolve(__dirname, '../', 'dist'), {
    enableBrotli: true,
    index: false,
    orderPreference: ['br'],
}))

let render

/**
 * @function getRenderer
 * @return {function} An instance of the Vue SSR Renderer
 */
if (isDevelopment) {
    // Set default render in case there is a request before inital pack.
    render = (req, res) => res.send('Compiling, reload in a moment.')
    // Add hot middleware and create a new render function each time both client and server have finished packing.
    require('./hmr.js')(app, (serverBundle, clientManifest, template) => {
        render = require('./ssr_renderer.js')(clientManifest, serverBundle, template)
    })
    // If in production, load the client and server files to be served.
} else {
    const template = fs.readFileSync(path.resolve('./dist/index.html'), 'utf8')
    const serverBundle = JSON.parse(fs.readFileSync('./dist/vue-ssr-server-bundle.json', 'utf8'))
    const clientManifest = JSON.parse(fs.readFileSync('./dist/vue-ssr-client-manifest.json', 'utf8'))
    render = require('./ssr_renderer.js')(clientManifest, serverBundle, template)
}

app.get('*', (req, res) => {
    const context = {
        url: req.url,
        fullUrl: 'https://' + req.get('host') + req.originalUrl,
        nonce: isDevelopment ? null : nonce,
    }

    render(req, res, context)
})

app.listen(frontendPort, (err) => {
    if (err) {
        throw err
    }
    console.log(`Running in ${process.env.NODE_ENV} mode`)
    console.log(`Listening on port ${frontendPort}`)
})

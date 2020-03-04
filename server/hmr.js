const path = require('path')
const webpack = require('webpack')
const MFS = require('memory-fs')
const clientConfig = require('../config/webpack.client.config.js')
const serverConfig = require('../config/webpack.server.config.js')

module.exports = function(app, callback) {
  let serverBundle
  let clientManifest
  let template

  // setup on the fly compilation + hot-reload
  clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app]
  clientConfig.output.filename = '[name].js'

  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  )

  const clientCompiler = webpack(clientConfig)
  const developmentMiddleware = require('webpack-dev-middleware')(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false,
    },
  })

  // Hot middleware
  app.use(require('webpack-hot-middleware')(clientCompiler))
  app.use(developmentMiddleware)

  // When the clientside code is done compiling initial manifests
  clientCompiler.plugin('done', () => {
    console.log('client done')
    const fs = developmentMiddleware.fileSystem
    const templatePath = path.join(clientConfig.output.path, 'index.html')
    const clientManifestPath = path.join(clientConfig.output.path, 'vue-ssr-client-manifest.json')
    if (fs.existsSync(templatePath) && fs.existsSync(clientManifestPath)) {
      template = fs.readFileSync(templatePath, 'utf-8')
      clientManifest = JSON.parse(fs.readFileSync(clientManifestPath, 'utf-8'))

      callbackIfReady()
    }
  })

  // Watch and update server renderer
  const serverCompiler = webpack(serverConfig)

  const mfs = new MFS()
  serverCompiler.outputFileSystem = mfs

  // The server bundle is recompiled on every change
  serverCompiler.watch({}, (error, stats) => {
    if (error) {
      throw error
    }
    stats = stats.toJson()
    stats.errors.forEach(console.error)
    stats.warnings.forEach(console.warn)

    // read bundle generated by vue-ssr-webpack-plugin
    const serverBundlePath = path.join(serverConfig.output.path, 'vue-ssr-server-bundle.json')
    serverBundle = JSON.parse(mfs.readFileSync(serverBundlePath, 'utf-8'))

    callbackIfReady()
  })

  /**
     * Callback when the client compiler has compiled the clientManifest and template
     * And the server compiler has compiled the serverBundle
     * @function cbIfReady
     */
  function callbackIfReady() {
    // If the server bundle, clientManifest, and template have all been generated, call back
    if (serverBundle && clientManifest && template) {
      callback(serverBundle, clientManifest, template)
    }
  }
}

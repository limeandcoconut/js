const path = require('path')
const nodeExternals = require('webpack-node-externals')

const paths = require('../paths')
const loaders = require('./loaders')
const resolvers = require('./resolvers')
const plugins = require('./plugins')

module.exports = {
    name: 'server',
    target: 'node',
    entry: {
        server: [
            require.resolve('core-js/stable'),
            require.resolve('regenerator-runtime/runtime'),
            path.resolve(paths.srcClient, 'entry-server.js'),
        ],
    },
    externals: [
        // TODO: Clean up
        // https://webpack.js.org/configuration/externals/#function
        // https://github.com/liady/webpack-node-externals
        // Externalize app dependencies. This makes the server build much faster and generates a smaller bundle file.
        // Do not externalize dependencies that need to be processed by webpack.
        // You can add more file types here e.g. raw *.vue files.
        // You should also whitelist deps that modifies `global` (e.g. polyfills).
        nodeExternals({
            // we still want imported css from external files to be bundled otherwise 3rd party packages
            // which require us to include their own css would not work properly
            whitelist: /\.css$/,
        }),
    ],
    output: {
        path: paths.serverBuild,
        filename: 'server.js',
        publicPath: paths.publicPath,
        // This tells the server bundle to use Node-style exports
        libraryTarget: 'commonjs2',
    },
    resolve: {...resolvers},
    module: {
        rules: loaders.server,
    },
    plugins: [...plugins.shared, ...plugins.server],
    stats: {
        colors: true,
        warnings: process.env.MUTE_PACK === 'false',
        children: process.env.MUTE_PACK === 'false',
    },
}

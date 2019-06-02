const path = require('path')
const paths = require('../paths')
const loaders = require('./loaders')
const resolvers = require('./resolvers')
const plugins = require('./plugins')

console.log('as;ldkfjaslkdfjasl;fkjadsfl;kjasdf')
console.log('as;ldkfjaslkdfjasl;fkjadsfl;kjasdf')
console.log('as;ldkfjaslkdfjasl;fkjadsfl;kjasdf')
console.log('as;ldkfjaslkdfjasl;fkjadsfl;kjasdf')

module.exports = {
    name: 'client',
    target: 'web',
    entry: {
        bundle: [
            require.resolve('core-js/stable'),
            require.resolve('regenerator-runtime/runtime'),
            `${paths.srcClient}/entry-client.js`,
        ],
    },
    output: {
        path: path.join(paths.clientBuild, paths.publicPath),
        publicPath: paths.publicPath,
        filename: '[name]-bundle.js',
        chunkFilename: '[id].chunk.js',
    },
    module: {
        rules: loaders.client,
    },
    resolve: {...resolvers},
    plugins: [...plugins.shared, ...plugins.client],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty', // eslint-disable-line camelcase
    },
    optimization: {
        namedModules: true,
        noEmitOnErrors: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    stats: {
        cached: false,
        cachedAssets: false,
        chunks: false,
        chunkModules: false,
        colors: true,
        hash: false,
        modules: false,
        reasons: false,
        timings: true,
        version: false,
        warnings: process.env.MUTE_PACK === 'false',
        children: process.env.MUTE_PACK === 'false',
    },
}

const baseConfig = require('./client.base')
const BrotliPlugin = require('brotli-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const path = require('path')
const paths = require('../paths')
const SitemapPlugin = require('sitemap-webpack-plugin').default // 😬
const RobotstxtPlugin = require('robotstxt-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const {productionHost} = require('../config.js')
const siteMeta = require('../meta')
const CopyPlugin = require('copy-webpack-plugin')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')

const MinifyPlugin = require('babel-minify-webpack-plugin')
// Dev tools
const Visualizer = require('webpack-visualizer-plugin')

const generateSourceMap = process.env.OMIT_SOURCEMAP !== 'true'

// Don't add these plugins in if a short buildtime is required
const intensePlugins = process.env.LITE_BUILD === 'true' ? [] :
    [
        // Convert asset images
        new ImageminWebpWebpackPlugin({
            config: [{
                test: /\.(jpe?g|png)/,
                options: {
                    quality: 90,
                },
            }],
            overrideExtension: false,
            detailedLogs: false,
        // strict: true
        }),
        // TODO: Get images doing .jpg -> .webp.br
        // TODO: Wonder if you can compress woff2s?
        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.js$|\.css$/,
            threshold: 0,
        }),
        // Always best to read options for this and cater to specific project needs
        // https://www.npmjs.com/package/sw-precache-webpack-plugin
        new SWPrecacheWebpackPlugin({
            filename: path.join(paths.proxyToSiteRoot, 'service-worker.js'),
            minify: true,
            runtimeCaching: [{
                urlPattern: '/*',
                handler: 'networkFirst',
            // Options:
            // cacheFirst
            // fastest
            // networkOnly
            // cacheOnly
            // WHY U NO slowest()?
            }],
            staticFileGlobs: [
                path.join(paths.publicPath, '/**.css'),
                path.join(paths.publicPath, '/**.js'),
                path.join(paths.publicAssetPath, '/**'),
            ],
            // Don't allow the service worker to try to cache google analytics or your tracking will stop working
            // Disable any other scripts you don't want cached here as well
            staticFileGlobsIgnorePatterns: [/google-analytics\.com/],
        }),
        // These paths are joined here so that
        // path, paths, and subsequently fs are not included on client where this is use
        new WebpackPwaManifest({
            name: siteMeta.name,
            short_name: siteMeta.short_name, // eslint-disable-line camelcase
            description: siteMeta.description,
            background_color: siteMeta.color, // eslint-disable-line camelcase
            theme_color: siteMeta.color, // eslint-disable-line camelcase
            // crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
            icons: siteMeta.manifestIcons.map(({src, ...rest}) => {
                return {
                    src: path.join(paths.sharedMeta, src),
                    ...rest,
                }
            }),
            filename: 'manifest.json',
            display: siteMeta.display,
            start_url: siteMeta.start_url, // eslint-disable-line camelcase
            inject: false,
            fingerprints: false,
            ios: false,
            includeDirectory: false,
        }),
        // Copy icons and other assets
        new CopyPlugin(siteMeta.copyMeta.map(({from, to}) => {
            return {
                from: path.join(paths.sharedMeta, from),
                to,
            }
        })),
    ]

const config = {
    ...baseConfig,
    mode: 'production',
    // TODO: learn more about sourcemaps and quality
    devtool: generateSourceMap ? 'source-map' : false,
    plugins: [
        ...intensePlugins,
        // TODO: why?
        new Visualizer({filename: '../stats.html'}),
        new MinifyPlugin(),
        new DuplicatePackageCheckerPlugin({
            // Also show module that is requiring each duplicate package (default: false)
            verbose: true,
            // Emit errors instead of warnings (default: false)
            // emitError: true,
        }),
        // Write sitemap
        new SitemapPlugin(productionHost, [
            {
                path: '/',
                priority: 1,
            },
            {
                path: '/login',
                priority: 0.8,
            },
            {
                path: '/register',
                priority: 0.8,
            },
        ], {
        // Last update is now
            lastMod: true,
            skipGzip: true,
            fileName: path.join(paths.proxyToSiteRoot, 'sitemap.xml'),
        }),
        // Write robots
        new RobotstxtPlugin({
            policy: [
                {
                    userAgent: '*',
                    allow: '/',
                },
            ],
            sitemap: path.join(productionHost, 'sitemap.xml'),
            host: productionHost,
            filePath: path.join(paths.proxyToSiteRoot, 'robots.txt'),
        }),
        ...baseConfig.plugins,
    ],
}

config.optimization.splitChunks = {
    cacheGroups: {
        vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            // chunks: 'all',
            name: 'vendor',
            enforce: true,
        },
    },
}

config.output.filename = 'bundle.[hash:8].js'

module.exports = config

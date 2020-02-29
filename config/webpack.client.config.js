const base = require('./webpack.base.config.js')

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const CopyPlugin = require('copy-webpack-plugin')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default // 😬
const RobotstxtPlugin = require('robotstxt-webpack-plugin')

const siteMeta = require('./meta.config.js')
const {productionHost} = require('../config.js')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
    ...base,

    entry: {
        app: './client/entry_client.js',
    },
    plugins: [
        ...(base.plugins || []),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"client"',
        }),
        new MiniCssExtractPlugin({
            filename: `[name]${isProduction ? '.[contenthash]' : ''}.css`,
            chunkFilename: `[id]${isProduction ? '.[contenthash]' : ''}.css`,
        }),
        // This plugins generates `vue-ssr-client-manifest.json` in the
        // output directory.
        new VueSSRClientPlugin(),
        new WebpackBuildNotifierPlugin({
            title: 'Webpack Client Build',
            suppressSuccess: true,
        }),
    ],
}

if (isProduction) {
    // This automatically takes care of vendor splitting
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

    // Add Compression plugins and service worker caching
    config.plugins.push(
        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.js$|\.css$/,
            threshold: 0,
            minRatio: 0.8,
        }),
        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.js$|\.css$/,
            threshold: 0,
            // minRatio: 0.8,
        }),
        // It'd be best to read options for this and cater to specific project needs
        // https://www.npmjs.com/package/sw-precache-webpack-plugin
        new SWPrecacheWebpackPlugin({
            // This will interpret a leading slash as root
            filename: path.join('proxy_to_site_root', '/service-worker.js'),
            // staticFileGlobs: ['dist/**/*.{js,html,css}'],
            // minify: true,
            // stripPrefix: 'dist/',
            runtimeCaching: [{
                urlPattern: '/*',
                handler: 'networkFirst',
                // Options:
                // cacheFirst
                // fastest
                // networkOnly
                // cacheOnly
                // Why u no slowest?
            }],
            staticFileGlobs: [
                'dist/**.css',
                'dist/img/**.*',
                'dist/**.js',
                // TODO: cache fonts?
            ],
            // Don't allow the service worker to try to cache google analytics or your tracking will stop working
            // Disable any other scripts you don't want cached here as well
            staticFileGlobsIgnorePatterns: [/google-analytics.com/],
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
                    src: path.join('public/icons', src),
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
        new CopyPlugin(siteMeta.copyMeta.map(({from = '', to, name}) => {
            return {
                from: path.join(__dirname, '../public', from, name),
                to,
            }
        })),
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
                path: '/404',
                priority: 0,
            },
        ], {
        // Last update is now
            lastMod: true,
            skipGzip: true,
            fileName: path.join('proxy_to_site_root', 'sitemap.xml'),
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
            filePath: path.join('proxy_to_site_root', 'robots.txt'),
        }),
    )
}

module.exports = config

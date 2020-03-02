const path = require('path')

// Core Deps required for packing
const HTMLPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

// Dev tools
const Visualizer = require('webpack-visualizer-plugin')

const isProduction = process.env.NODE_ENV === 'production'

let config = {
    mode: isProduction ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        publicPath: '/dist/',
        filename: '[name]-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.less$/,
                use: [
                    // This would add css extraction for prod but nix inlining the first chunk.
                    // isProduction ?
                    // {
                    //     loader: ExtractCssChunks.loader,
                    //     options: {
                    //         hmr: true,
                    //     },
                    // }
                    // : 'vue-style-loader',
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: isProduction,
                            sourceMap: !isProduction,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')({
                                browsers: ['> 1%', 'last 2 versions'],
                            })],
                        },
                    },
                    'less-loader',
                ],
            },
        ],
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new VueLoaderPlugin(),
        new HTMLPlugin({
            template: 'client/index.template.html',
            // Inject false turns off automatic injection of Css and JS
            inject: false,
        }),
        // Also required for prod css extraction
        // new ExtractCssChunks({
        //     filename: `[name]${isProduction ? '.[contenthash]' : ''}.css`,
        //     chunkFilename: `[id]${isProduction ? '.[contenthash]' : ''}.css`,
        // }),
        // Adds some highlighting as sugar
        // TODO: On trial
        new FriendlyErrorsWebpackPlugin(),
    ],
    optimization: {},
}

if (isProduction) {
    config.plugins.push(
        new Visualizer({filename: '../stats.html'}),
        new MinifyPlugin(),
    )
} else {
    config.devtool = 'cheap-module-eval-source-map'
    // config.devtool = 'cheap-eval-source-map'
    // config.devtool = 'eval'
}

module.exports = config

// TODO: Should htis plugin go away?
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const generateSourceMap = process.env.OMIT_SOURCEMAP !== 'true'
// const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent')

const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/

const babelLoader = {
    test: /\.(js)$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: {
        plugins: [
            [
                require.resolve('babel-plugin-named-asset-import'),
                {
                    loaderMap: {
                        svg: {
                            ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                        },
                    },
                },
            ],
        ],
        cacheDirectory: true,
        cacheCompression: process.env.NODE_ENV === 'production',
        compact: process.env.NODE_ENV === 'production',
    },
}

const vueLoader = {
    test: /\.vue$/,
    loader: require.resolve('vue-loader'),
}

const lessModuleLoaderClient = {
    test: lessModuleRegex,
    use: [
        require.resolve('css-hot-loader'),
        MiniCssExtractPlugin.loader,
        {
            loader: require.resolve('css-loader'),
            options: {
                camelCase: true,
                modules: true,
                importLoaders: 2,
                sourceMap: generateSourceMap,
                // getLocalIdent: getCSSModuleLocalIdent,
            },
        },
        {
            loader: require.resolve('less-loader'),
        },
        // Didn't know you could run less through postcss did ya?
        // This'll run the less through postcss via a syntax (see the postcss file for that and the plugins)
        // Then it'll convert it to css. Can't do that first because this uses custom postcss syntaxes that less
        // wont parse.
        // Then css loader and hot loader it.
        {
            loader: require.resolve('postcss-loader'),
            options: {
                // TODO: Get this working perfectly. (create an issue?)
                // sourceMap: generateSourceMap,
            },
        },
    ],
}

const lessLoaderClient = {
    test: lessRegex,
    exclude: lessModuleRegex,
    use: [
        require.resolve('css-hot-loader'),
        MiniCssExtractPlugin.loader,
        require.resolve('css-loader'),
        {
            loader: require.resolve('less-loader'),
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
            },
        },
    ],
}

// TODO: Look into less and what's happening here

// Why generate sourcemap here and not in previous loader???
const lessModuleLoaderServer = {
    test: lessModuleRegex,
    use: [
        {
            loader: require.resolve('css-loader'),
            options: {
                camelCase: true,
                modules: true,
                importLoaders: 2,
                // localIdentName: '[name]__[local]--[hash:base64:5]',
                // getLocalIdent: getCSSModuleLocalIdent,
                exportOnlyLocals: true,
            },
        },
        {
            loader: require.resolve('less-loader'),
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                // sourceMap: generateSourceMap,
            },
        },
    ],
}

const lessLoaderServer = {
    test: lessRegex,
    exclude: lessModuleRegex,
    use: [
        require.resolve('css-loader'),
        {
            loader: require.resolve('less-loader'),
        },
    ],
}

const urlLoaderClient = {
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: require.resolve('url-loader'),
    options: {
        limit: 2048,
        name: 'assets/[name].[hash:8].[ext]',
    },
}

const urlLoaderServer = {
    ...urlLoaderClient,
    options: {
        ...urlLoaderClient.options,
        emitFile: false,
    },
}

const fileLoaderClient = {
    exclude: [/\.(js|css|mjs|html|ejs|json)$/],
    use: [
        {
            loader: require.resolve('file-loader'),
            options: {
                name: 'assets/[name].[hash:8].[ext]',
            },
        },
    ],
}

const fileLoaderServer = {
    exclude: [/\.(js|css|mjs|html|ejs|json)$/],
    use: [
        {
            loader: require.resolve('file-loader'),
            options: {
                name: 'assets/[name].[hash:8].[ext]',
                emitFile: false,
            },
        },
    ],
}

const client = [
    vueLoader,
    {
        // test: /^/,
        oneOf: [
            // vueLoader,
            babelLoader,
            // vueLoader,
            lessModuleLoaderClient,
            lessLoaderClient,
            urlLoaderClient,
            fileLoaderClient,
        ],
    },
]
const server = [
    vueLoader,
    {
        test: /^/,
        oneOf: [
            // vueLoader,
            babelLoader,
            // vueLoader,
            lessModuleLoaderServer,
            lessLoaderServer,
            urlLoaderServer,
            fileLoaderServer,
        ],
    },
]

module.exports = {
    client,
    server,
}

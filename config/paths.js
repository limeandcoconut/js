const path = require('path')
const fs = require('fs')

/** @module paths */

const rootPath = process.cwd()

const appDirectory = fs.realpathSync(rootPath)
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

const paths = {
    clientBuild: resolveApp('dist'),
    serverBuild: resolveApp('dist'),
    dotenv: resolveApp('.env'),
    src: resolveApp('client'),
    srcClient: resolveApp('client'),
    srcServer: resolveApp('client'),
    srcShared: resolveApp('client'),
    // sharedMeta: resolveApp('client/assets/meta'),
    publicPath: '/static/',
    // This path is used by haproxy and nginx. See readme.
    // Don't add leading slash!
    proxyToSiteRoot: 'served_from_root/',
    publicAssetPath: '/static/assets',
}

paths.resolveModules = [
    paths.srcClient,
    paths.srcServer,
    paths.srcShared,
    paths.src,
    'node_modules',
]

module.exports = paths

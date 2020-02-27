# Todos
- [ ] https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0
<!-- When serializing state on the server to be sent to the client, you need to serialize in a way that escapes HTML entities. This is because you’re often no longer using React to create this string, hence not having the string automatically escaped. -->
- [ ] Server should reload the files used for render when they update
       This could be via checking meta data on the files or a method triggered by a route
- [ ] More things in meta should be pulled from config (Author, theme-color, etc)
- [ ] Client and server SSR manifests shouldn't be put into dist. They shouldn't be publicly accessible.
- [ ] Investigate compressing other resources such as images in webpack
- [ ] Add placeholder favicon
- [ ] Use ENV variable for port in serve and haproxy.cfg
- [ ] Dynamic author tag
- [ ] Theme color and related meta should pull from config (msapplication-TileImage)
- [ ] Figure out a table_mobile mixin
- [ ] Add some fancy image optimization
- [ ] Make notifications of server and client build both run, or find out why they aren't.
- [ ] Investigate compression other resources such as images in webpack
- [ ] Add isProduction helper and general server helpers folder
- [ ] Auto generate sitemap
- [ ] Add fancy resolve helpers to webpack config
- [ ] Chrome seems to be getting Gzip instead of BR files

# Maybe Todos
- [ ] Find a better css reset
- [ ] Compress more assets in public like fonts and icons
- [ ] Strip all GZip compression and go to all brotli
- [ ] Update to new rubik, remove woff
- [ ] Add better postcss
- [ ] Add portfolio
- [ ] Add WebpackDevServerUtils.choosePort to projects
- [ ] Add Sitemap and Robots from recat
- [ ] [Fix icons and stuff](https://realfavicongenerator.net)
- [ ] Add <base>

# Watch
Css extraction currently isn't available. Follow these threads for updates:
https://github.com/webpack-contrib/mini-css-extract-plugin/issues/90
https://github.com/webpack-contrib/mini-css-extract-plugin/issues/173

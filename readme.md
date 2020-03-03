## Gettings started
Run ```npm run dev``` to start webpacking and serving to localhost:3005

## Npm Scripts
 - dev: Starts webpacking of the client and server, and starts serving the content on port 3005
 - production: Starts the server in production mode (Don't forget to pack first)
 - pack-production: Runs webpack in production mode for the client and server
 - pack-client-production: Production mode packs the client only
 - pack-server-production: Production mode packs the server only
 - clean: deletes files in the dist directory

## HTTPS/HTTP2
The application serves up only http and expects you to use a reverse proxy for TLS.  
For local testing of Http2 there is an included docker compose file and and HAProxy config.  
For deployment, using HAProxy via the included config is also reccomended.  

## Things to edit for your own project
Customize config.js  
Customize public/manifest.json  
Add icons  
Author, colors, twitter names in index.template.html  

## Notes
When you update the site to have more pages *UPDATE THE REL CANONICAL.*
In components use relative urls for images.

<!-- Replace with a blame link after this is pushed -->
I [explicitly](/package.json) don't support IE. https://css-tricks.com/a-business-case-for-dropping-internet-explorer/

### Fonts

Preloading Fonts
https://ashton.codes/preload-google-fonts-using-resource-hints/

Getting local copies of Google Fonts
https://google-webfonts-helper.herokuapp.com

### Todos
- [ ] Fix issue with reloading and fonts
- [ ] Update readme and dotfiles
- [ ] Change link underline to use text-decoration-colors
- [ ] Add portfolio
- [ ] Add postcss
- [ ] Add miami theme

const tags = {
  name: content => `<meta name="description" content="${content}" />`,
  title: content => content,
  author: content => `<meta name="author" content="${content}" />`,
  description: content => `<meta name="description" content="${content}" />`,
  color: content => `<meta name="theme-color" content="${content}" id="theme_color" />`,
  og: {
    description: content => `<meta property="og:description" content="${content}" />`,
    image: {
      src: content => `<meta property="og:image" content="${content}" />`,
      width: content => `<meta property="og:image:width" content="${content}" /> `,
      height: content => `<meta property="og:image:height" content="${content}" />`,
    },
    type: content => `<meta property="og:type" content="${content}" />`,
  },
  twitter: {
    creator: content => `<meta name="twitter:creator" content="${content}" />`,
    image: {
      src: content => `<meta property="twitter:image" content="${content}" />`,
      alt: content => `<meta property="twitter:image:alt" content="${content}" />`,
    },
    card: content => `<meta name="twitter:card" content="${content}" />`,
  },
  ms: {
    color: content => `<meta name="msapplication-TileColor" content="${content}" />`,
  },
  favicons: {
    default: content => `<link rel="shortcut icon" href="${content}" />`,
    x32: content => `<link rel="icon" type="image/png" sizes="32x32" href="${content}" />`,
    x16: content => `<link rel="icon" type="image/png" sizes="16x16" href="${content}" />`,
    apple: content => `<link rel="apple-touch-icon" sizes="180x180" href="${content}" />`,
    safariMask: (content, {color}) => `<link rel="mask-icon" href="${content}" color="${color}" />`,
    ms: content => `<meta name="msapplication-TileImage" content="${content}" />`,
  },
  manifest: content => `<link rel="manifest" href="${content}" />`,
  relCanonical: content => `<link rel="canonical" href="${content}" />`,
  noIndex: () => '<meta name="robots" content="noindex, nofollow" />',
}

export default (siteMeta) => {

  /**
     * Get meta from a vue instance, default back to meta.config.js
     * @function getMeta
     * @param  {Object} vm  A component to check for meta
     * @return {Object}     A meta object
     */
  const getMeta = (vm) => {
    let {meta = {}} = vm.$options
    meta = {
      ...siteMeta,
      ...typeof meta === 'function' ? meta.call(vm) : meta,
    }
    // If the component has a meta section, use those values
    if (meta.title && meta.name && !meta.useTitleOnly) {
      meta.title = `${meta.title} | ${meta.name}`
    }
    return meta
  }

  /**
     * Traverse the tags object recursively. Formats values from meta and assigns them to context.
     * @function traverse
     * @param  {Object} context         A context object for formatted tags
     * @param  {Object} tags            A prototype object with formatters for values
     * @param  {Object} meta            An object containing meta configs
     * @param  {Object} [rootMeta=meta] The root meta object
     * @return {Object} The context object
     */
  const traverse = (context, tags, meta, rootMeta = meta) => {
    for (const [key, tag] of Object.entries(tags)) {
      if (!meta[key]) {
        continue
      }
      if (typeof tag === 'object') {
        context[key] = traverse(context[key] || {}, tag, meta[key], rootMeta)
        continue
      }
      context[key] = tag(meta[key], rootMeta)
    }
    return context
  }

  const serverMetaMixin = {
    created() {
      if (this.$ssrContext) {
        // Traverse the tags object creating a tag for each piece of meta provided and attaching it to the $ssrContext
        // Don't override meta in case it was set by another component
        this.$ssrContext.meta = traverse(this.$ssrContext.meta || {}, tags, getMeta(this))
      }
    },
  }

  const clientMetaMixin = {
    mounted() {
      const {title} = getMeta(this)
      document.title = title
    },
  }

  return process.env.VUE_ENV === 'server' ? serverMetaMixin : clientMetaMixin
}

module.exports = {
  siteMetadata: {
    title: `dinbeach.dev`,
    siteUrl: `https://dinobeach.dev`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", 'gatsby-plugin-postcss', {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.svg"
    }
  },
  {
    resolve: `gatsby-source-ghost`,
    options: {
      apiUrl: `https://gatsby.ghost.io`,
      contentApiKey: `9cc5c67c358edfdd81455149d0`,
    },
  },
   "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }, 
    __key: "blog"
  }
  ]
};
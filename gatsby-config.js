require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['post'],
  singleTypes: [],
};

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
    resolve: `gatsby-source-strapi`,
    options: strapiConfig,
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
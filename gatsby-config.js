const lost = require(`lost`)
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [lost()],
      },
    },
    {
    resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};

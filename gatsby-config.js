const lost = require(`lost`)

module.exports = {
  siteMetadata: {
    title: 'erica esooo',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [lost()],
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};

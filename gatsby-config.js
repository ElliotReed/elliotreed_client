module.exports = {
  siteMetadata: {
    title: `Elliot Reed`,
    description: `Personal website`,
    author: `Elliot Reed`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elliot Reed Website`,
        short_name: `Elliot`,
        start_url: `/`,
        background_color: `#221A1D`,
        theme_color: `#221A1D`,
        display: `minimal-ui`,
        icon: `src/images/elliotreed-icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

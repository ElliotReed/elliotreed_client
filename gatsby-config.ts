module.exports = {
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-layout`,
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
    // 'gatsby-plugin-postcss',
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/pages/developer/portfolio`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    "gatsby-transformer-typescript-css-modules",
    'gatsby-plugin-typescript',


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
  // proxy: {
  //   prefix: "",
  //   url: "http://localhost:3066",
  // },
  siteMetadata: {
    author: `Elliot Reed`,
    description: `Personal website`,
    siteUrl: `https://www.elliotreed.net`,
    title: `Elliot Reed`,
  },
}

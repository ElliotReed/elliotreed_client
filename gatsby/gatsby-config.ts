module.exports = {
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Elliot Reed Website",
        short_name: "Elliot",
        start_url: "/",
        background_color: "#221A1D",
        theme_color: "#221A1D",
        display: "minimal-ui",
        icon: "src/images/elliotreed-icon.svg", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          // "gatsby-remark-autolink-headers",
          // "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 90,
              withWebp: true,
            }
          },
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/ // Where your SVG files are located.
        }
      }
    },
    "gatsby-plugin-mdx-source-name",
    // 'gatsby-plugin-postcss',
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 60,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "ILoveParisGallery",
        path: `${__dirname}/src/components/ILoveParisGallery`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "bands",
        path: `${__dirname}/_bands`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  // proxy: {
  //   prefix: "",
  //   url: "http://localhost:3066",
  // },

  siteMetadata: {
    author: "Elliot Reed",
    description: "Elliot Reed Music, I arrange, compose, perform and teach music. Guitar lessons available",
    siteUrl: "https://www.elliotreed.net",
    title: "Elliot Reed Music",
  },
}

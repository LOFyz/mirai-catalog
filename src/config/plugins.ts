export default [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Use Mirai`,
      short_name: `Mirai`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#01534d`,
      display: `standalone`,
      icon: `src/images/icon.png`,
      description: `Elegância, Sol & Mar`,
    },
  },
  "gatsby-plugin-styled-components",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sitemap",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "./src/images/",
    },
    __key: "images",
  },
  {
    resolve: "gatsby-plugin-nprogress",
    options: {
      color: "#01534d",
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: ["GA-TRACKING_ID"],
    },
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `${__dirname}/src/pages`,
    },
  },
  "gatsby-plugin-offline",
];

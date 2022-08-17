import type { GatsbyConfig } from "gatsby";

import siteMetadata from "./src/config/metadata";

const config: GatsbyConfig = {
  siteMetadata,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
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
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            subsets: [`400`, `600`, `700`],
          },
          {
            family: `Quicksand`,
            subsets: [`400`, `500`, `600`, `700`],
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
};

export default config;

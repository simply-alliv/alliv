// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = require("gatsby-plugin-config").default

module.exports = {
  siteMetadata: {
    title: `Allistair Vilakazi`,
    description: `Hi, I am Allistair Vilakazi. A software developer. A UI/UX designer. A freelancer with competencies in React, Angular, Express, HTML, CSS, JS, Docker, DevOps, and more.`,
    author: `Allistair Vilakazi`,
    siteUrl: `https://www.alliv.dev`,
  },
  plugins: [
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
        name: `Allistair Vilakazi - Software Developer `,
        short_name: `Allistair Vilakazi`,
        start_url: `/`,
        background_color: `#1c1c1c`,
        theme_color: `#ffbb0b`,
        display: `minimal-ui`,
        icon: `src/images/logomark.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Kirvy:400,700`, `Londrina Shadow:400`],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `kirvy\:400,700`,
    //       `londrina shadow\:400`, // you can also specify font weights and styles
    //     ],
    //     display: "swap",
    //   },
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: config.FIREBASE_API_KEY,
          authDomain: config.FIREBASE_AUTH_DOMAIN,
          databaseURL: config.FIREBASE_DATABASE_URL,
          projectId: config.FIREBASE_PROJECT_ID,
          storageBucket: config.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
          appId: config.FIREBASE_APP_ID,
          measurementId: config.FIREBASE_MEASUREMENT_ID,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

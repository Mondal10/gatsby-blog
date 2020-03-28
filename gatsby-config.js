/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Developer Blog',
    author: 'Amit Mondal'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        // path: `${__dirname}\\src\\posts\\`, // For windows path
        // path: `${__dirname}/src/posts/`, // For Mac/Linux path
        path: path.resolve('./src/posts'), // Irrespective of OS
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ],
}

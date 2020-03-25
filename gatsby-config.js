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
    `gatsby-transformer-remark`
  ],
}

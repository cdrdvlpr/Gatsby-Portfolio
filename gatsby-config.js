/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Mahmoud Kebbeh",
    description: "Portfolio",
    copyrights: "Copyright © 2020-2022 Mahmoud Kebbeh, All rights reserved.",
    contact: "mahmoudbk250@hotmail.com",
  },
}

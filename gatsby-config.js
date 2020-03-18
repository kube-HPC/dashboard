const website = require(`./src/config/meta`);
const alias = require(`./src/constants/aliases`);

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    ...website,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: alias(`src`),
        extensions: ['js'],
      },
    },
    // Must be placed at the end
    `gatsby-plugin-offline`,
  ],
};

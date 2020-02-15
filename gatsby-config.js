const meta = require(`./src/config/meta`);

module.exports = {
  siteMetadata: meta,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Dennis Vash',
        short_name: 'denvash',
        start_url: `/`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@icons': 'src/components/atoms/Icons',
          '@hooks': 'src/hooks',
          '@config': 'src/config',
          '@styles': 'src/styles',
          '@utils': 'src/utils',
          '@constants': 'src/constants',
          '@queries': 'src/queries',
          '@store': 'src/store',
        },
        extensions: ['js'],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        printRejected: true,
        purgeOnly: [`src/styles/globals.css`],
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: `Dennis Vash | Web Developer`,
    description: `Dennis Vash`,
    author: `@dennisvash`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Dennis Vash',
        short_name: 'denvash',
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#F25192`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
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
  ],
};

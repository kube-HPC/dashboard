module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Dennis Vash | Front End Software Engineer', // Navigation and Site Title
  titleAlt: 'Dennis Vash Front-End Developer', // Title for JSONLD
  description:
    'Dennis Vash is a software engineer based in Israel who specializes in developing exceptional, high-quality websites and applications.',
  headline: 'I create things for the web', // Headline for schema.org JSONLD
  url: 'https://dennisvash.dev', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  banner: '/banner.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'favicon.png', // Used for manifest favicon generation
  shortName: 'Dennis Vash', // shortname for manifest. MUST be shorter than 12 characters
  author: 'denvash', // Author for schemaORGJSONLD
  themeColor: '#842FCF',
  backgroundColor: '#EBEDF2',

  twitter: '@DennisVash', // Twitter Username
  facebook: 'DennisVash', // Facebook Site Name
  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};

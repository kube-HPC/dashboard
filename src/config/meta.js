module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: `HKube | HPC Over Kubernetes`, // Navigation and Site Title
  titleAlt: `HKube - HPC Over Kubernetes`, // Title for JSONLD
  description: `HKube is a cloud-native open source framework to run distributed pipeline of algorithms
  built on Kubernetes. HKube optimally utilizing pipeline's resources, based on user
  priorities and heuristics.`,
  headline: `HKube - HPC Over Kubernetes`, // Headline for schema.org JSONLD
  url: `https://hkube.io`, // Domain of your site. No trailing slash!
  github: `https://github.com/kube-HPC/hkube`,
  issues: `https://github.com/kube-HPC/hkube/issues`,
  siteLanguage: `en`, // Language Tag on <html> element
  banner: `/banner.png`, // Used for SEO
  ogLanguage: `en_US`, // Facebook Language

  // JSONLD / Manifest
  favicon: `static/favicon.png`, // Used for manifest favicon generation
  shortName: `HKube`, // shortname for manifest. MUST be shorter than 12 characters
  author: `denvash`, // Author for schemaORGJSONLD
  themeColor: `#842FCF`,
  backgroundColor: `#EBEDF2`,

  twitter: `@DennisVash`, // Twitter Username
  facebook: `DennisVash`, // Facebook Site Name
  skipNavId: `reach-skip-nav`, // ID for the "Skip to content" a11y feature

  googleAnalyticsID: `UA-158593354-1`,
};

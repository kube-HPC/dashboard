import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Facebook from './Facebook.react';
import Twitter from './Twitter.react';

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        headline
        siteLanguage
        ogLanguage
        author
        twitter
        facebook
      }
    }
  }
`;

const SEO = ({ title, desc, banner, pathname, article }) => {
  const { site } = useStaticQuery(query);

  const {
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      siteLanguage,
      ogLanguage,
      twitter,
      facebook,
      pathPrefix,
    },
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ''}`,
  };

  const canonicalLink =
    pathPrefix === '' && typeof window !== 'undefined' ? window.location.origin : pathPrefix;

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage}></html>
        <link rel="canonical" href={canonicalLink} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitter} />
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
};

export default SEO;

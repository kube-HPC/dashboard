import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

const META_DATA_QUERY = graphql`
  query getMetaData {
    site {
      meta: siteMetadata {
        siteUrl
        twitterHandle
        title
        titleTemplate
        image
        description
        baseUrl
        siteKeywords
        name
        location
        language
        github
        email
      }
    }
  }
`;

const SEO = () => {
  const {
    site: { meta },
  } = useStaticQuery(META_DATA_QUERY);

  const {
    siteUrl,
    twitterHandle,
    titleTemplate,
    title,
    image,
    description,
    language,
    baseUrl,
  } = meta;

  const main = [
    {
      name: `description`,
      content: description,
    },
    {
      name: `image`,
      content: image,
    },
  ];

  const og = [
    {
      property: `og:url`,
      content: siteUrl,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:image`,
      content: image,
    },
  ];

  const twitter = [
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: twitterHandle,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ];

  const canonicalLink =
    baseUrl === '' && typeof window !== 'undefined' ? window.location.origin : baseUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[...main, ...twitter, ...og]}>
      <link rel="canonical" href={canonicalLink} />
    </Helmet>
  );
};

export default SEO;

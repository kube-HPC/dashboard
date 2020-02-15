import { Hero } from '@components';
import { GlobalStyle } from '@styles';
import React from 'react';
import SEO from '../SEO/SEO.react';

const IndexPage = () => (
  <>
    <SEO />
    <GlobalStyle />
    <main>
      <Hero />
    </main>
  </>
);

export default IndexPage;

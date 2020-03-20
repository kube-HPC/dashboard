import { Dashboard, SEO } from '@components';
import { GlobalStyle } from '@styles';
import React from 'react';

const IndexPage = () => (
  <>
    <SEO />
    <GlobalStyle />
    <main>
      <Dashboard />
    </main>
  </>
);

export default IndexPage;

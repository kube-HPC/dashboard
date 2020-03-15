import { GlobalStyle } from '@styles';
import React from 'react';
import SEO from '../SEO/SEO.react';
import Dashboard from '../templates/Dashboard.react';

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

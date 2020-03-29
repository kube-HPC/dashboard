import { Dashboard, SEO } from '@components';
import { useSocket } from '@hooks';
import { GlobalStyle } from '@styles';
import React from 'react';

const IndexPage = () => {
  useSocket();
  return (
    <>
      <SEO />
      <GlobalStyle />
      <main>
        <Dashboard />
      </main>
    </>
  );
};

export default IndexPage;

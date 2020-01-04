import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import SEO from '../SEO.react';

const Wrapper = styled.div`
  ${tw`flex items-center justify-center flex-col h-screen`}
`;

const IndexPage = () => (
  <Wrapper>
    <SEO title="Home" />
    <div>Hello</div>
  </Wrapper>
);

export default IndexPage;

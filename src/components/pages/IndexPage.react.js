import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Hero from '../organisms/Hero/Hero.react';
import SEO from '../SEO.react';

const Wrapper = styled.div`
  ${tw`flex items-center justify-center h-screen`}
`;

const IndexPage = () => (
  <Wrapper>
    <SEO title="Dennis Vash | Web Developer" />
    <Hero />
  </Wrapper>
);

export default IndexPage;

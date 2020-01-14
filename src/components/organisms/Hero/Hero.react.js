import { LogoParallax } from '@components';
import { styled } from '@styles';
import React from 'react';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${tw`w-full h-full flex justify-center items-center`}
`;

const Hero = () => (
  <Container>
    <LogoParallax />
  </Container>
);

export default Hero;

import { SB_LABELS } from '@constants';
import { mixins, styled } from '@styles';
import React from 'react';
import tw from 'tailwind.macro';
import LogoParallax from './LogoParallax.react';

export default {
  title: `${SB_LABELS.MOLECULES}Logo Parallax`,
};

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`h-screen`}
`;

export const Default = () => (
  <Container>
    <LogoParallax />
  </Container>
);

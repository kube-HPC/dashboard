import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import LogoParallax from './LogoParallax.react';

export default {
  title: `${SB_LABELS.ATOMS}Logo Parallax`,
};

const Container = styled.div`
  ${tw`w-1/3`}
`;

export const Default = () => (
  <Container>
    <LogoParallax />
  </Container>
);

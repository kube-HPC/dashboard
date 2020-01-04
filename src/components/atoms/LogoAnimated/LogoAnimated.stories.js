import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import LogoAnimated from './LogoAnimated.react';

export default {
  title: `${SB_LABELS.ATOMS}Logo Animated`,
};

const Container = styled.div`
  ${tw`w-1/3`}
`;

export const Default = () => (
  <Container>
    <LogoAnimated />
  </Container>
);

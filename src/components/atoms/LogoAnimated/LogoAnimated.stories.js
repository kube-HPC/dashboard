import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import LogoAnimated from './LogoAnimated.react';

const Container = styled.div`
  svg {
    ${tw`w-1/3`}
  }
`;

export default {
  title: `${SB_LABELS.ATOMS}Logo Animated`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

export const Default = LogoAnimated;

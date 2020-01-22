import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import LogoAnimated from './LogoAnimated.react';

const Container = styled.div`
  ${mixins.flexCenter}
  svg {
    ${tw`fill-current w-full`}
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

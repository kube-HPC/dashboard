import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IconLogo } from './index';

const Container = styled.div`
  ${mixins.flexCenter}
  svg {
    ${tw`fill-current w-1/3`}
  }
`;

export default {
  title: `${SB_LABELS.ATOMS}Icons`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

export const logo = IconLogo;

import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Shapes from './Shapes.svg.react';

const Container = styled.div`
  ${tw`bg-gray-300`};
  svg {
    ${tw`w-full h-screen`};
  }
`;

export default {
  title: `${SB_LABELS.ATOMS}Shapes`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

export const Default = Shapes;

import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Jobs from './Jobs.react';

const Container = styled.div`
  ${tw`h-screen`}
`;

export default {
  title: `${SB_LABELS.ORGANISMS}Lists/Jobs`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

export const Default = Jobs;

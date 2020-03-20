import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React, { useReducer } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Expand from './Expand.react';

const Container = styled.div`
  ${mixins.flexCenter}
  svg {
    ${tw`fill-current w-1/2`}
  }
`;

export default {
  title: `${SB_LABELS.MOLECULES}Expand`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

export const Default = () => {
  const [expanded, toggle] = useReducer(p => !p, false);
  return (
    <>
      <Expand expanded={expanded} onClick={toggle} />
    </>
  );
};

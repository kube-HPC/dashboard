import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import tw, { styled } from 'twin.macro';
import Divider from './Divider.react';

const Container = styled.div`
  ${mixins.flexStart}
  ${tw``}
`;

export default {
  title: `${SB_LABELS.ATOMS}Divider`,
};

export const Default = () => (
  <>
    Top
    <Divider />
    Bottom
  </>
);
export const Vertical = () => (
  <Container>
    <span>Left</span>
    <Divider vertical />
    <span>Right</span>
  </Container>
);

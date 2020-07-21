import { THEME } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import { theme } from 'styled-tools';
import tw, { styled } from 'twin.macro';

const Thumb = props => <Container {...props} />;

const Container = styled.div`
  ${theme(THEME.value.backgroundDark, tw`bg-darkGray-500`)}
  ${tw`rounded-lg opacity-50 cursor-pointer`}
  ${mixins.opacityFocus}
  ${tw`hocus:opacity-75`}
`;

Thumb.className = Container;
export default Thumb;

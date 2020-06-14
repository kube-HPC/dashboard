import { THEME } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import { theme } from 'styled-tools';
import tw, { styled } from 'twin.macro';

const ThumbColored = styled.div`
  ${theme(THEME.value.backgroundDark, tw`bg-darkGray-500`)}
  ${tw`rounded-lg opacity-50 cursor-pointer`}
  ${mixins.opacityFocus}
  ${tw`hocus:opacity-75`}
`;

const Thumb = props => <ThumbColored {...props} />;

export default Thumb;

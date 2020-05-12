import { THEME } from '@constants';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import tw from 'twin.macro';

const ThumbColored = styled.div`
  ${theme(THEME.value.backgroundDark, tw`bg-gray-500`)}
  ${tw`rounded-md opacity-25`}
`;

const Thumb = props => <ThumbColored {...props} />;

export default Thumb;
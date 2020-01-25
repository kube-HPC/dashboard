import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import SocialBar from './SocialBar.react';

export default {
  title: `${SB_LABELS.MOLECULES}Social Bar`,
};

const FixedBottomLeft = styled.div`
  ${tw`fixed bottom-0 left-0`}
`;

export const Default = SocialBar;
export const BottomLeft = () => (
  <FixedBottomLeft>
    <SocialBar />
  </FixedBottomLeft>
);

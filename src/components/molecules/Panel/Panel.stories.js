import { SB_LABELS } from '@constants';
import React from 'react';
import tw, { styled } from 'twin.macro';
import Panel from './Panel.react';

const Decorator = styled.div`
  ${tw`h-screen`}
`;

export default {
  title: `${SB_LABELS.MOLECULES}Panel`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

export const Default = Panel;

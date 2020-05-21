import { SB_LABELS } from '@constants';
import React from 'react';
import { styled, tw } from 'twin.macro';
import { Panel } from '../../../molecules';
import WelcomePanel from './WelcomePanel.react';

const Decorator = styled.div`
  ${tw`h-screen p-2`}
`;

export default {
  title: `${SB_LABELS.ORGANISMS}Panels/Welcome Panel`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

export const Content = WelcomePanel;

// Default is welcome screen
export const InPanel = Panel;

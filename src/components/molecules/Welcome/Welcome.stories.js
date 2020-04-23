import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Panel } from '..';
import Welcome from './Welcome.react';

const Decorator = styled.div`
  ${tw`h-screen p-2`}
`;

export default {
  title: `${SB_LABELS.MOLECULES}Welcome Panel`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

export const Default = Welcome;

// Default is welcome screen
export const InPanel = Panel;

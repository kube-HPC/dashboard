import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Notification from './Notification.react';

const Decorator = styled.div`
  ${tw`h-screen w-screen`}
`;

export default {
  title: `${SB_LABELS.MOLECULES}Notification`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

export const Default = () => <Notification>Message</Notification>;

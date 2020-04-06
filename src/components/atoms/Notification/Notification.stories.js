import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Notification from './Notification.react';

const Decorator = styled.div`
  ${tw``}
`;

export default {
  title: `${SB_LABELS.ATOMS}Notification`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

export const Example = () => (
  <Notification title="Notification Title">Notification Content</Notification>
);

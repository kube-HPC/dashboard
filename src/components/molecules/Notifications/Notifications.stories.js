import { Notification } from '@atoms';
import { SB_LABELS } from '@constants';
import { useNotification } from '@hooks';
import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Notifications from './Notifications.react';

const Container = styled.div`
  ${tw`h-screen`}
`;

const Button = styled.button`
  ${tw`border border-black m-2 p-2`}
`;

export default {
  title: `${SB_LABELS.MOLECULES}Notifications`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

export const Example = () => {
  const { add } = useNotification();
  const [counter, toggle] = useReducer(p => p + 1, 0);

  useEffect(() => {
    if (counter === 0) {
      add(<Notification title={`Notification-${counter}`}>Some Custom Component</Notification>);
    }
  }, [add, counter]);

  return (
    <>
      <Button
        onClick={() => {
          add(<Notification title={`Notification-${counter}`}>Content</Notification>);
          toggle();
        }}>
        Add Notification
      </Button>
      <Notifications />
    </>
  );
};

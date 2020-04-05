import { SB_LABELS } from '@constants';
import { useNotification } from '@hooks';
import React, { useEffect } from 'react';
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

  useEffect(() => {
    add(`Timed Notification`);
    add(
      <div>
        <h1>Some Custom Component</h1>
        <p>Some Long Text can be rendered too</p>
      </div>,
    );
  }, [add]);

  return (
    <>
      <Button onClick={() => add(`New Notification`)}>Add Notification</Button>
      <Notifications />
    </>
  );
};

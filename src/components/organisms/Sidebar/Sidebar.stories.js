import { SB_LABELS } from '@constants';
import { useSidebar } from '@hooks';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar.react';

export default {
  title: `${SB_LABELS.ORGANISMS}Sidebar`,
};

const Container = styled.div`
  ${mixins.flexStart}
`;

export const Default = Sidebar;
export const Toggle = () => {
  const { toggle, value } = useSidebar();
  return (
    <Container>
      <Sidebar />
      <div>
        <button onClick={toggle}>Toggle</button>
        <h1>Selected Value: {value}</h1>
      </div>
    </Container>
  );
};

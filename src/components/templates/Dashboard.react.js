import { Sidebar, TopActions } from '@components';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexStart}
`;

const TopBar = styled(TopActions)`
  ${tw`flex-grow px-4 py-2`}
`;

const Dashboard = () => (
  <Container>
    <Sidebar />
    <TopBar />
  </Container>
);

export default Dashboard;

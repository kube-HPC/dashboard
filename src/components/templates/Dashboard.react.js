import { AdminPanel, Sidebar, TopActions } from '@components';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexStart}
`;

const Main = styled.div`
  ${mixins.flexStart}
  ${tw`flex-col h-screen px-4 py-2 flex-grow`}
`;

const Content = styled.div`
  ${mixins.flexEnd}
  ${tw`w-full flex-grow`}
`;

const TopBar = styled(TopActions)`
  ${tw`mb-5`}
`;

const Dashboard = () => (
  <Container>
    <Sidebar />
    <Main>
      <TopBar />
      <Content>
        <AdminPanel />
      </Content>
    </Main>
  </Container>
);

export default Dashboard;

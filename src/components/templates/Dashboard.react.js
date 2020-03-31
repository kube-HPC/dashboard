import { AdminPanel } from '@molecules';
import { Jobs, Sidebar, TopActions } from '@organisms';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexStart}
`;

const Main = styled.div`
  ${mixins.flexStart}
  ${tw`flex-col h-screen p-2 flex-grow overflow-hidden`}
`;

const Content = styled.div`
  ${mixins.flexStart}
  ${tw`w-full flex-grow`}
  ${Jobs.SC.Container} {
    ${tw`flex-grow mr-1 h-full`}
  }
`;

const TopBar = styled(TopActions)`
  ${tw`mb-3`}
`;

const Dashboard = () => (
  <Container>
    <Sidebar />
    <Main>
      <TopBar />
      <Content>
        <Jobs />
        <AdminPanel />
      </Content>
    </Main>
  </Container>
);

export default Dashboard;

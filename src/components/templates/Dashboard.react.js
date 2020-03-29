import { AdminPanel, Jobs, Sidebar, TopActions } from '@components';
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
  ${Jobs.SC} {
    ${tw`flex-grow pr-3 pl-1 mr-1 h-full`}
  }
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
        {/* <VirtualList>
          <Jobs />
        </VirtualList> */}
        <AdminPanel></AdminPanel>
      </Content>
    </Main>
  </Container>
);

export default Dashboard;

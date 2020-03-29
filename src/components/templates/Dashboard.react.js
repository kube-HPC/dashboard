import { AdminPanel, Divider, Jobs, Sidebar, TopActions } from '@components';
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
        <AdminPanel>
          <div>HKube - HPC over Kuberenetes</div>
          <Divider />
          <p>
            HKube is a cloud-native open source framework to run distributed pipeline of algorithms
            built on Kubernetes. HKube optimally utilizing pipeline's resources, based on user
            priorities and heuristics.
          </p>
          <a href={`http://hkube.io/`}>Docs</a>
          <a href={`https://github.com/kube-HPC/hkube`}>Github</a>
        </AdminPanel>
      </Content>
    </Main>
  </Container>
);

export default Dashboard;

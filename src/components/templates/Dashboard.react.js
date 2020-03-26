import { AdminPanel, Jobs, Sidebar, TopActions } from '@components';
import { useScroll } from '@hooks';
import { mixins } from '@styles';
import React, { useEffect, useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
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

const Dashboard = () => {
  const { onScrollFrame, setIndexes } = useScroll();
  const scrollRef = useRef();

  useEffect(() => {
    const totalItems = Math.ceil(scrollRef.current.getClientHeight() / 100);
    setIndexes([0, totalItems]);
  }, [setIndexes]);

  return (
    <Container>
      <Sidebar />
      <Main>
        <TopBar />
        <Content>
          <Scrollbars ref={scrollRef} autoHide onScrollFrame={onScrollFrame}>
            <Jobs />
          </Scrollbars>
          <AdminPanel></AdminPanel>
        </Content>
      </Main>
    </Container>
  );
};

export default Dashboard;

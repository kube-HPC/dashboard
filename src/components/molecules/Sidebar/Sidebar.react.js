import { Menu } from '@components';
import { SIDEBAR, sidebarValues } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexBetween};
  ${tw`flex-col bg-white px-4 h-screen uppercase py-2`};
  width: fit-content;
  ${Menu.Item}:not(:first-child):not(:last-child) {
    ${tw`my-6`}
  }
`;

const Header = styled.div`
  ${tw`text-4xl pt-10`};
  background: linear-gradient(0deg, #868f96 0%, #596164 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Version = styled(animated.div)`
  ${tw`lowercase text-secondary`};
`;

const Sidebar = () => (
  <Container>
    <Header>{SIDEBAR.title}</Header>
    <Menu>
      {sidebarValues.map(value => (
        <div key={value}>{value}</div>
      ))}
    </Menu>
    <Version>v2.0.0</Version>
  </Container>
);

export default Sidebar;

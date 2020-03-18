import { Menu } from '@components';
import { sidebarValues } from '@constants';
import { mixins, spring } from '@styles';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled(motion.div)`
  ${mixins.flexBetween};
  ${tw`flex-col bg-white px-4 h-screen uppercase py-2`};
  width: fit-content;
  ${Menu.Item}:not(:first-child):not(:last-child) {
    ${tw`my-6`}
  }
`;

const Header = styled(motion.div)`
  ${tw`text-4xl pt-10`};
  background: linear-gradient(0deg, #868f96 0%, #596164 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Version = styled(motion.div)`
  ${tw`lowercase text-secondary`};
`;

const delay = {
  open: {
    x: 0,
    transition: {
      staggerChildren: 1,
      ...spring.slow,
    },
  },
  closed: {
    x: -200,
  },
};

const Sidebar = () => (
  <Container initial="closed" animate="open" variants={delay}>
    <Header variants={delay}>Hkube</Header>
    <Menu delayAnimation={1}>
      {sidebarValues.map(value => (
        <div key={value}>{value}</div>
      ))}
    </Menu>
    <Version variants={delay}>v2.0.0</Version>
  </Container>
);

export default Sidebar;

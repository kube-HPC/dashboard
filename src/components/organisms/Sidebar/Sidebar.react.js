import { SIDEBAR } from '@config';
import { THEME } from '@constants';
import { Menu } from '@molecules';
import { mixins, spring } from '@styles';
import { motion } from 'framer-motion';
import React from 'react';
import { theme } from 'styled-tools';
import { styled, tw } from 'twin.macro';

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
    transition: spring.slow,
  },
};

const Sidebar = () => (
  <Container initial="closed" animate="open" variants={delay}>
    <Header variants={delay}>HKube</Header>
    <Menu delayAnimation={1} visible>
      {SIDEBAR.values.map(value => (
        <div key={value}>{value}</div>
      ))}
    </Menu>
    <div />
  </Container>
);

const Container = styled(motion.div)`
  ${theme(THEME.value.background)}
  ${mixins.flexBetween};
  ${tw`flex-col h-screen py-2 uppercase`};
  ${tw`w-24 xl:w-32`}
  ${tw`px-1 md:px-2`}
  ${Menu.SC.Item}:not(:last-child) {
    ${tw`mb-8`}
  }
  ${Menu.SC.Items} {
    ${tw`pb-24`}
  }
`;

const Header = styled(motion.div)`
  ${theme(THEME.value.headerGradient)}
  ${tw`text-xl md:text-2xl lg:text-3xl xl:text-4xl pt-10`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Rajdhani', sans-serif;
`;

Sidebar.className = Container;

export default Sidebar;

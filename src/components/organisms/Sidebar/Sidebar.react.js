import { SIDEBAR } from '@config';
import { useSidebar } from '@hooks';
import { Menu } from '@molecules';
import { mixins, spring } from '@styles';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled(motion.div)`
  ${mixins.flexBetween};
  ${mixins.upperCase}
  ${mixins.textSecondary}
  ${tw`flex-col bg-white h-screen py-2`};
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
  ${tw`text-xl md:text-2xl lg:text-3xl xl:text-4xl pt-10`};
  background: linear-gradient(0deg, #868f96 0%, #596164 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Rajdhani', sans-serif;
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
    transition: spring.slow,
  },
};

const Sidebar = () => {
  const { setValue, visible } = useSidebar();
  return (
    <Container initial="closed" animate={visible ? `open` : `closed`} variants={delay}>
      <Header variants={delay}>Hkube</Header>
      <Menu delayAnimation={1} visible={visible} onChange={setValue}>
        {SIDEBAR.values.map(value => (
          <div key={value}>{value}</div>
        ))}
      </Menu>
      <div />
    </Container>
  );
};

export default Sidebar;

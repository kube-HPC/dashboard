import { Menu } from '@components';
import { SIDEBAR } from '@config';
import { useSidebar } from '@hooks';
import { mixins, spring } from '@styles';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled(motion.div)`
  ${mixins.flexBetween};
  ${mixins.upperCase}
  ${mixins.textSecondary}
  ${tw`flex-col bg-white px-3 h-screen py-2`};
  width: fit-content;
  ${Menu.Item} {
    ${tw`mb-6`}
  }
`;

const Header = styled(motion.div)`
  ${tw`text-4xl pt-10`};
  background: linear-gradient(0deg, #868f96 0%, #596164 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Rajdhani', sans-serif;
`;

const Version = styled(motion.div)`
  ${tw`lowercase`};
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
    <Container initial="closed" animate={visible ? 'open' : 'closed'} variants={delay}>
      <Header variants={delay}>Hkube</Header>
      <Menu delayAnimation={1} visible={visible} onChange={setValue}>
        {SIDEBAR.values.map(value => (
          <div key={value}>{value}</div>
        ))}
      </Menu>
      <Version variants={delay}>v2.0.0</Version>
    </Container>
  );
};

export default Sidebar;

import { Menu } from '@components';
import { sidebarValues } from '@constants';
import { mixins } from '@styles';
import React, { useState } from 'react';
import { animated, config, useTransition } from 'react-spring';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled(animated.div)`
  ${mixins.flexBetween};
  ${tw`flex-col bg-white px-4 h-screen uppercase py-2`};
  width: fit-content;
  ${Menu.Item}:not (:first-child):not(:last-child) {
    ${tw`my-6`}
  }
`;

const Header = styled(animated.div)`
  ${tw`text-4xl pt-10`};
  background: linear-gradient(0deg, #868f96 0%, #596164 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Version = styled(animated.div)`
  ${tw`lowercase text-secondary`};
`;

const spring = {
  config: config.slow,
  delay: 2000,
  from: { x: -100 },
  enter: { x: 0 },
  leave: { x: -100 },
};

const Sidebar = () => {
  const [show] = useState(true);
  const [{ item, key, props: style }] = useTransition(show, null, spring);
  return (
    item && (
      <Container key={key} style={style}>
        <Header style={style}>Hkube</Header>
        <Menu>
          {sidebarValues.map(value => (
            <div key={value}>{value}</div>
          ))}
        </Menu>
        <Version style={style}>v2.0.0</Version>
      </Container>
    )
  );
};

export default Sidebar;

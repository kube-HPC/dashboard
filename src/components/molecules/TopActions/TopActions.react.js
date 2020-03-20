import { IconsBar, Menu } from '@components';
import { TOP_BAR } from '@config';
import { mixins } from '@styles';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${mixins.flexBetween}
  ${mixins.upperCase}
`;

const items = [
  <IconsBar key="left" icons={TOP_BAR.leftIcons} />,
  <Menu key="center" horizontal>
    {TOP_BAR.values.map(value => (
      <div key={value}>{value}</div>
    ))}
  </Menu>,
  <IconsBar key="right" icons={TOP_BAR.rightIcons} />,
];

const TopActions = () => (
  <Container>
    {items.map(value => (
      <motion.div key={value.name}>{value}</motion.div>
    ))}
  </Container>
);

export default TopActions;

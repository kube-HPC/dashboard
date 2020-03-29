import { IconsBar, Menu } from '@components';
import { TOP_BAR } from '@config';
import { mixins } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexBetween}
  ${mixins.upperCase}
  ${tw`text-lg w-full`}
`;

const items = [
  <IconsBar key="left" icons={TOP_BAR.leftIcons} reveal="top" />,
  <Menu key="center" horizontal>
    {TOP_BAR.values.map(value => (
      <div key={value}>{value}</div>
    ))}
  </Menu>,
  <IconsBar key="right" icons={TOP_BAR.rightIcons} reveal="top" />,
];

const TopActions = ({ className }) => (
  <Container className={className}>
    {items.map(value => (
      <motion.div key={value.key}>{value}</motion.div>
    ))}
  </Container>
);

TopActions.propTypes = {
  className: PropTypes.string,
};

export default TopActions;

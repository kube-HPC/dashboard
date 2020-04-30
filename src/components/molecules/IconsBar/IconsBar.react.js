import iconsMap from '@icons';
import { mixins, spring } from '@styles';
import { EMPTY_ARRAY } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Item = styled(motion.div)``;

const Container = styled(motion.div)`
  ${tw`fill-current`}
  ${mixins.textSecondary}
  ${mixins.flexCenter};
  ${Item}:not(:last-child) {
    ${tw`mr-2`}
  }
`;

const item = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ...spring.slow,
    },
  },
  top: {
    opacity: 0,
    y: -100,
    transition: spring.slow,
  },
};

const IconsBar = ({ icons = EMPTY_ARRAY, reveal = `` }) => (
  <Container initial={reveal} animate="visible" variants={item}>
    {icons.map(({ name, action, isAvailable = true }) => {
      const Icon = iconsMap[name];
      const onClick = () => action();
      return (
        isAvailable && (
          <Item key={name} onClick={onClick} variants={item}>
            <Icon />
          </Item>
        )
      );
    })}
  </Container>
);

IconsBar.className = Container;

IconsBar.propTypes = {
  icons: PropTypes.array.isRequired,
  actions: PropTypes.array,
  isActionAvailable: PropTypes.array,
  reveal: PropTypes.string,
};

export default IconsBar;

import iconsMap from '@icons';
import { mixins, spring } from '@styles';
import { EMPTY_ARRAY } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { ifProp } from 'styled-tools';
import tw, { styled } from 'twin.macro';

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

const IconsBar = ({ icons = EMPTY_ARRAY, reveal = ``, vertical = false }) => (
  <Container initial={reveal} animate="visible" variants={item} vertical={vertical}>
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

const Item = styled(motion.div)``;

const Container = styled(motion.div)`
  ${tw`fill-current`}
  ${mixins.textSecondary}
  ${mixins.flexCenter};
  ${Item}:not(:last-child) {
    ${ifProp(`vertical`, tw`mb-2`, tw`mr-2`)}
  }
  ${ifProp(`vertical`, tw`flex-col`)}
`;

IconsBar.className = Container;

IconsBar.propTypes = {
  icons: PropTypes.array.isRequired,
  actions: PropTypes.array,
  isActionAvailable: PropTypes.array,
  reveal: PropTypes.string,
  vertical: PropTypes.bool,
};

export default IconsBar;

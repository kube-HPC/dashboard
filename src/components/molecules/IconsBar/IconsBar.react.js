import { useUtilities } from '@hooks';
import iconsMap from '@icons';
import { mixins, spring } from '@styles';
import { EMPTY_ARRAY } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
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

const container = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  visible: {
    y: 0,
    transition: spring.slow,
  },
  top: {
    y: -50,
  },
};

const IconsBar = ({ icons = EMPTY_ARRAY, actions = EMPTY_ARRAY, reveal = `` }) => {
  const { setValue } = useUtilities();
  const action = useCallback(
    (name, index) => {
      setValue(name);
      actions[index]?.();
    },
    [actions, setValue],
  );
  return (
    <Container initial={reveal} animate="visible" variants={container}>
      {icons.map((name, index) => {
        const Icon = iconsMap[name];
        const onClick = () => action(name, index);
        return (
          <Item key={name} onClick={onClick} variants={item}>
            <Icon />
          </Item>
        );
      })}
    </Container>
  );
};

IconsBar.SC = Container;

IconsBar.propTypes = {
  icons: PropTypes.array.isRequired,
  actions: PropTypes.array,
  reveal: PropTypes.string,
};

export default IconsBar;

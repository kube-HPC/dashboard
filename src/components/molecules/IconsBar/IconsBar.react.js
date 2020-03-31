import { useUtilities } from '@hooks';
import iconsMap from '@icons';
import { mixins, spring } from '@styles';
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

const IconsBar = ({ icons = [], reveal = `` }) => {
  const { setValue } = useUtilities();
  return (
    <Container initial={reveal} animate="visible" variants={container}>
      {icons.map(name => {
        const Icon = iconsMap[name];
        const onClick = () => setValue(name);
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
  reveal: PropTypes.string,
};

export default IconsBar;

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
  hidden: {
    y: -50,
  },
};

const IconsBar = ({ icons = [] }) => {
  const { setValue } = useUtilities();
  return (
    // <Container initial="hidden" animate="visible" variants={container}>
    <Container>
      {icons.map(name => {
        const Icon = iconsMap[name];
        const onClick = () => setValue(name);
        return (
          <Item key={name} onClick={onClick}>
            <Icon />
          </Item>
        );
      })}
    </Container>
  );
};
IconsBar.propTypes = {
  icons: PropTypes.array.isRequired,
};

export default IconsBar;

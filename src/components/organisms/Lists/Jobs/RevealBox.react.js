import { useUserTheme } from '@hooks';
import { mixins } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { ifProp, prop } from 'styled-tools';
import tw, { styled } from 'twin.macro';

const RevealBox = ({ className, onHoverStart, isFullHeight, status }) => {
  const { theme } = useUserTheme();
  return (
    <Container
      {...{ className, onHoverStart, isFullHeight }}
      color={theme.colors.pipeline.status[status]}>
      <div />
    </Container>
  );
};

const $props = {
  isFullHeight: `isFullHeight`,
};

const Container = styled(motion.div)`
  ${mixins.flexCenter}
  ${tw`w-6 h-8 ml-1`}
  > div {
    ${tw`w-1 min-h-0 top-0 rounded-lg`}
    ${ifProp($props.isFullHeight, tw`h-12`, tw`h-6`)}
    background-color: ${prop(`color`)};
  }
`;

RevealBox.className = Container;
RevealBox.propTypes = {
  className: PropTypes.string,
  onHoverStart: PropTypes.func.isRequired,
  isFullHeight: PropTypes.bool.isRequired,
  status: PropTypes.string,
};

export default RevealBox;

import { NOOP } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import { ifProp, prop } from 'styled-tools';
import { styled, tw } from 'twin.macro';

const Box = styled.div`
  ${tw`h-3 rounded-sm`}
`;

const Container = styled.div`
  ${tw`hocus:cursor-pointer w-12`}
  ${ifProp(`gradient`, tw`w-1/2`)}
  ${Box} {
    background-color: ${prop(`color`)};
    ${prop(`gradient`)};
  }
`;

const ColorBox = ({ className, color, gradient, onClick = NOOP }) => (
  <Container
    role="button"
    className={className}
    color={color}
    gradient={gradient}
    onClick={onClick}>
    <Box />
  </Container>
);

ColorBox.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.func,
  gradient: PropTypes.array,
};

ColorBox.SC = { Container, Box };

export default ColorBox;

import { NOOP } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import tw from 'twin.macro';

const Box = styled.div``;

const Container = styled.div`
  ${tw`border bg-white hocus:cursor-pointer w-full`}
  ${Box} {
    ${tw`h-3 m-1 rounded-sm`}
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

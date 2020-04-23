import { ColorBox } from '@atoms';
import { mixins } from '@styles';
import { NOOP } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexBetween}
  ${tw`py-1 px-2`}
  ${tw`transition duration-500 ease-in-out`}
  ${tw`hocus:opacity-75 hocus:shadow-md`}
  ${ifProp(`isSelected`, tw`shadow-lg`)}

  ${ColorBox.SC.Container} {
    ${tw`w-12 ml-2`}
  }
`;

const ColorProperty = ({ className, children, color, gradient, onClick = NOOP, isSelected }) => (
  <Container className={className} role="button" onClick={onClick} isSelected={isSelected}>
    <div>{children}</div>
    <ColorBox color={color} gradient={gradient} />
  </Container>
);

ColorProperty.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.func,
  gradient: PropTypes.object,
};

ColorProperty.SC = Container;

export default ColorProperty;

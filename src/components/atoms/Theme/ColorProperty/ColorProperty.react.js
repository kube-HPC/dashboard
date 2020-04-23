import { mixins } from '@styles';
import { NOOP } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import tw from 'twin.macro';

const ColorBox = styled.div`
  ${tw`border bg-white hocus:cursor-pointer ml-4`}
  > div {
    ${tw`h-3 w-10 m-1 rounded-sm`}
    background-color: ${prop(`color`)};
  }
`;

const Container = styled.div`
  ${mixins.flexBetween}
  ${tw`p-2`}
  ${tw`transition duration-500 ease-in-out`}
  ${tw`hocus:opacity-75 hocus:shadow-md`}
  ${ifProp(`isSelected`, tw`shadow-lg`)}
`;

const ColorProperty = ({ className, children, color, onClick = NOOP, isSelected }) => (
  <Container className={className} role="button" onClick={onClick} isSelected={isSelected}>
    <div>{children}</div>
    <ColorBox color={color}>
      <div />
    </ColorBox>
  </Container>
);

ColorProperty.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.func,
};

ColorProperty.SC = Container;

export default ColorProperty;

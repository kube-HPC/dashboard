import { ColorBox } from '@atoms';
import { pallettes as PALLETTES } from '@styles';
import { NOOP } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`p-2`}
  ${tw`transition duration-500 ease-in-out`}
  ${tw`hocus:opacity-75 hocus:shadow-md`}
  ${ifProp(`isSelected`, tw`shadow-lg`)}
  ${tw`w-20`}
`;

const PallettePicker = ({
  className,
  pallettes = PALLETTES,
  onClick: onPalletteClick = NOOP,
  isSelected,
}) => (
  <Container className={className} role="button" isSelected={isSelected}>
    {Object.entries(pallettes).map(([name, { colors, background }]) => {
      const onClick = () => onPalletteClick(name);
      return <ColorBox key={name} gradient={background} onClick={onClick} />;
    })}
  </Container>
);

PallettePicker.propTypes = {
  className: PropTypes.string,
  pallettes: PropTypes.object,
  onClick: PropTypes.func,
  isSelected: PropTypes.func,
};

PallettePicker.SC = Container;

export default PallettePicker;

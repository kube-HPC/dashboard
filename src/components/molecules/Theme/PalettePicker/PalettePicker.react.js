import { ColorBox } from '@atoms';
import { gradients as GRADIENTS, mixins, palettes as PALETTES } from '@styles';
import { NOOP } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`p-2 flex-row`}
  ${tw`transition duration-500 ease-in-out`}
  ${tw`hocus:opacity-75 hocus:shadow-md`}
  ${ifProp(`isSelected`, tw`shadow-lg`)}
  ${tw`w-20`}
`;

const PalettePicker = ({
  className,
  pallettes: palettes = PALETTES,
  onClick: onPalletteClick = NOOP,
  isSelected = false,
}) => (
  <Container className={className} role="button" isSelected={isSelected}>
    {Object.entries(palettes).map(([name, { backgroundGradient }]) => {
      const onClick = () => onPalletteClick(name);
      return <ColorBox key={name} gradient={GRADIENTS[backgroundGradient]} onClick={onClick} />;
    })}
  </Container>
);

PalettePicker.propTypes = {
  className: PropTypes.string,
  pallettes: PropTypes.object,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

PalettePicker.SC = Container;

export default PalettePicker;

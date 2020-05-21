import { NOOP } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import { SketchPicker } from 'react-color-slim';
import { ifProp } from 'styled-tools';
import { styled, tw } from 'twin.macro';

const PickerWrapper = styled.div``;

const Container = styled.div`
  ${ifProp(`disabled`, tw`opacity-25 cursor-not-allowed`)}

  ${PickerWrapper} {
    ${ifProp(`disabled`, tw`pointer-events-none`)}
  }
`;

const ColorPicker = ({
  className,
  color = `#000`,
  onChange: onColorChange = NOOP,
  disabled = false,
}) => {
  const onChange = ({ hex }) => onColorChange(hex);

  return (
    <Container className={className} disabled={disabled}>
      <PickerWrapper>
        <SketchPicker color={color} onChangeComplete={onChange} />
      </PickerWrapper>
    </Container>
  );
};

ColorPicker.SC = Container;

ColorPicker.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ColorPicker;

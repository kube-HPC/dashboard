import PropTypes from 'prop-types';
import React from 'react';
import { SketchPicker } from 'react-color';
import tw from 'twin.macro';

const Container = tw.div``;

const ColorPicker = ({ className, color, onChange: onColorChange }) => {
  const onChange = color => onColorChange(color.hex);

  return (
    <Container className={className}>
      <SketchPicker color={color} onChange={onChange} />
    </Container>
  );
};

ColorPicker.SC = Container;

ColorPicker.propTypes = {
  className: PropTypes.string,
};

export default ColorPicker;

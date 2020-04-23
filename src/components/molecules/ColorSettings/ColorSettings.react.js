import { ColorPicker, ColorProperty } from '@atoms';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw``}
`;

const ColorSettings = ({ className }) => {
  const [color, setColor] = useState(`#000`);
  return (
    <Container className={className}>
      <ColorPicker color={color} onChange={setColor} />
      <ColorProperty color={color}>Complete</ColorProperty>
    </Container>
  );
};

ColorSettings.propTypes = {
  className: PropTypes.string,
};

export default ColorSettings;

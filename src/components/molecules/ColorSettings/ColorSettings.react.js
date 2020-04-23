import { ColorPicker, ColorProperty, Divider } from '@atoms';
import { useTheme } from '@hooks';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`flex-col`}
  ${ColorProperty.SC} {
    ${tw`capitalize`}
  }
`;

const Grid = styled.div`
  ${tw`grid grid-cols-2 gap-2`}
`;

const ColorSettings = ({ className }) => {
  const { theme, setProperty } = useTheme();
  const [color, setColor] = useState(`#000`);
  return (
    <Container className={className}>
      <ColorPicker color={color} onChange={setColor} />
      <h1>Types</h1>
      <Divider />
      <Grid>
        {Object.entries(theme.pipeline.type).map(([property, color]) => (
          <ColorProperty key={property} color={color}>
            {property}
          </ColorProperty>
        ))}
      </Grid>
    </Container>
  );
};

ColorSettings.propTypes = {
  className: PropTypes.string,
};

export default ColorSettings;

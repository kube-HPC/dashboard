import { ColorPicker, ColorProperty, Divider } from '@atoms';
import { useTheme } from '@hooks';
import { mixins } from '@styles';
import { PallettePicker } from 'components/atoms/Theme';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`flex-col w-full`}
  ${ColorProperty.SC} {
    ${tw`capitalize`}
  }
  h1 {
    ${tw`mt-2`}
  }
`;

const Grid = styled.div`
  ${tw`grid grid-cols-2 gap-2`}
`;

const Pallettes = styled.div``;

const ThemePanel = ({ className }) => {
  const { theme, setProperty } = useTheme();
  const [color, setColor] = useState(`#000`);
  const [selectedPath, setSelectedPath] = useState();

  useEffect(() => {
    setProperty({ path: selectedPath, value: color });
  }, [color, selectedPath, setProperty]);

  return (
    <Container className={className}>
      <ColorPicker color={color} onChange={setColor} disabled={!selectedPath} />
      <h1>Pallettes</h1>
      <Divider />
      <PallettePicker />
      <h1>Types</h1>
      <Divider />
      <Grid>
        {Object.entries(theme.pipeline.type).map(([property, color]) => {
          const path = `pipeline.type.${property}`;
          const onClick = () => {
            setColor(color);
            setSelectedPath(path);
          };
          const isSelected = selectedPath === path;

          return (
            <ColorProperty key={property} color={color} onClick={onClick} isSelected={isSelected}>
              {property}
            </ColorProperty>
          );
        })}
      </Grid>
    </Container>
  );
};

ThemePanel.propTypes = {
  className: PropTypes.string,
};

export default ThemePanel;

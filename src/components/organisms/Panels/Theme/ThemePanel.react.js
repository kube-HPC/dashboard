import { ColorPicker, Divider } from '@atoms';
import { THEME } from '@constants';
import { useTheme } from '@hooks';
import { ColorProperty, PallettePicker } from '@molecules';
import { mixins } from '@styles';
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

const { pallette } = THEME;

const isPallette = path => Object.values(pallette).includes(path);

const ThemePanel = ({ className }) => {
  const { colors, setProperty, setPallette } = useTheme();
  const [color, setColor] = useState();
  const [path, setPath] = useState(pallette.default);

  useEffect(() => {
    isPallette(path) ? setPallette(path) : setProperty({ path: path, value: color });
  }, [color, path, setPallette, setProperty]);

  return (
    <Container className={className}>
      <ColorPicker color={color} onChange={setColor} disabled={isPallette(path)} />
      <h1>Pallettes</h1>
      <Divider />
      <PallettePicker isSelected={path === pallette.default} />
      <h1>Types</h1>
      <Divider />
      <Grid>
        {Object.entries(colors.pipeline.type).map(([property, color]) => {
          const propertyPath = `pipeline.type.${property}`;
          const onClick = () => {
            setColor(color);
            setPath(propertyPath);
          };
          const isSelected = path === propertyPath;

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

import { ColorProperty } from '@molecules';
import { gradients, mixins, palettes } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.fillContainer}
`;

const Grid = styled.div`
  ${tw`grid grid-cols-2 gap-2 w-full`}
`;

const ThemeProperty = ({
  className,
  title,
  isPallette,
  properties,
  currPath,
  propertyPath,
  onClick,
}) => (
  <Container>
    <h2>{title}</h2>
    {isPallette ? (
      <Grid>
        {Object.entries(palettes).map(([name, { backgroundGradient }]) => {
          const _onClick = () => onClick(name);
          return (
            <ColorProperty
              key={name}
              gradient={gradients[backgroundGradient]}
              onClick={_onClick}
              isSelected={currPath === name}>
              {name}
            </ColorProperty>
          );
        })}
      </Grid>
    ) : (
      // <PalettePicker isSelected={currPath === THEME.palette.default} onClick={onClick} />
      <Grid className={className}>
        {Object.entries(properties).map(([property, color]) => {
          const path = `${propertyPath}.${property}`;

          const _onClick = () => onClick({ path, value: color });
          const isSelected = currPath === path;

          return (
            <ColorProperty key={property} color={color} onClick={_onClick} isSelected={isSelected}>
              {property}
            </ColorProperty>
          );
        })}
      </Grid>
    )}
  </Container>
);

ThemeProperty.className = Container;

ThemeProperty.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  isPallette: PropTypes.bool,
  properties: PropTypes.object,
  currPath: PropTypes.string,
  propertyPath: PropTypes.string,
  onClick: PropTypes.func,
};

export default ThemeProperty;

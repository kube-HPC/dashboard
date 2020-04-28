import { Divider } from '@atoms';
import { THEME } from '@constants';
import { ColorProperty, PalettePicker } from '@molecules';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Grid = styled.div`
  ${tw`grid grid-cols-2 gap-2`}
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
  <>
    <h1>{title}</h1>
    <Divider />
    {isPallette ? (
      <PalettePicker isSelected={currPath === THEME.palette.default} onClick={onClick} />
    ) : (
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
  </>
);

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

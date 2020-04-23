import { ColorPicker } from '@atoms';
import { THEME } from '@constants';
import { useTheme } from '@hooks';
import { ColorProperty } from '@molecules';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ThemeProperty from './ThemeProperty.react';

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`flex-col w-full h-full`}
  ${ColorProperty.SC} {
    ${tw`capitalize`}
  }
  h1 {
    ${tw`mt-2`}
  }
`;

const isPallette = path => Object.values(THEME.pallette).includes(path);
const DEFAULT_THEME = { path: THEME.pallette.default, value: `#000` };

const ThemePanel = ({ className }) => {
  const { colors, setProperty, setPallette } = useTheme();
  const [{ path, value }, setTheme] = useState(DEFAULT_THEME);

  const onColorChange = value => setTheme(prev => ({ ...prev, value }));
  const onPathChange = path => setTheme(prev => ({ ...prev, path }));

  useEffect(() => {
    isPallette(path) ? setPallette(path) : setProperty({ path, value });
  }, [path, setPallette, setProperty, value]);

  return (
    <Container className={className}>
      <ColorPicker color={value} onChange={onColorChange} disabled={isPallette(path)} />
      <ThemeProperty title="Pallettes" isPallette currPath={path} onClick={onPathChange} />
      <ThemeProperty
        title="Types"
        currPath={path}
        properties={colors.pipeline.type}
        propertyPath={`pipeline.type`}
        onClick={setTheme}
      />
      <ThemeProperty
        title="Statuses"
        currPath={path}
        properties={colors.pipeline.status}
        propertyPath={`pipeline.status`}
        onClick={setTheme}
      />
    </Container>
  );
};

ThemePanel.propTypes = {
  className: PropTypes.string,
};

export default ThemePanel;

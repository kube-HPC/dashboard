import { ColorPicker } from '@atoms';
import { THEME } from '@constants';
import { useUserTheme } from '@hooks';
import { ColorProperty } from '@molecules';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ThemeProperty from './ThemeProperty.react';

const Container = styled.div`
  ${mixins.fillContainer}
  ${mixins.flexCenter}
  ${tw`flex-col`}
  ${ColorProperty.SC} {
    ${tw`capitalize`}
  }
  h1 {
    ${tw`mt-2`}
  }
`;

const isPallette = path => Object.values(THEME.palette).includes(path);
const DEFAULT_THEME = { path: THEME.palette.default, value: `#000` };

const ThemePanel = ({ className }) => {
  const {
    theme: { colors },
    setProperty,
    setPalette,
  } = useUserTheme();
  const [{ path, value }, setTheme] = useState(DEFAULT_THEME);

  const onColorChange = value => setTheme(prev => ({ ...prev, value }));
  const onPathChange = path => setTheme(prev => ({ ...prev, path }));

  useEffect(() => {
    isPallette(path) ? setPalette(path) : setProperty({ path, value });
  }, [path, setPalette, setProperty, value]);

  return (
    <Container className={className}>
      <ColorPicker color={value} onChange={onColorChange} disabled={isPallette(path)} />
      <ThemeProperty title="Palettes" isPallette currPath={path} onClick={onPathChange} />
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

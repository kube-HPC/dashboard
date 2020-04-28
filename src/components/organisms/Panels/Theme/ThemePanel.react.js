import { ColorPicker } from '@atoms';
import { THEME } from '@constants';
import { useUserTheme } from '@hooks';
import { ColorProperty } from '@molecules';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ThemeProperty from './ThemeProperty.react';

const Container = styled.div`
  ${tw`mt-5`} /* Margin because of custom-scroll */
  ${mixins.fillContainer}
  ${mixins.flexCenter}
  ${tw`flex-col`}
  ${ColorProperty.SC} {
    ${tw`capitalize`}
  }
  h2 {
    ${tw`underline`}
  }
  ${ThemeProperty.className} {
    ${tw`my-2`}
  }
`;

const isPallette = path => Object.values(THEME.palette).includes(path);

const ThemePanel = ({ className }) => {
  const {
    theme: { colors, name },
    setProperty,
    setPalette,
  } = useUserTheme();

  const [{ path, value }, setTheme] = useState(() => ({ path: name, value: `#000` }));

  const isMounted = useRef(false);

  const onColorChange = value => setTheme(prev => ({ ...prev, value }));
  const onPathChange = path => setTheme(prev => ({ ...prev, path }));

  useEffect(() => {
    if (isMounted.current) {
      isPallette(path) ? setPalette(path) : setProperty({ path, value });
    } else {
      isMounted.current = true;
    }
  }, [path, setPalette, setProperty, value]);

  return (
    <Container className={className}>
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
      <ColorPicker color={value} onChange={onColorChange} disabled={isPallette(path)} />
    </Container>
  );
};

ThemePanel.propTypes = {
  className: PropTypes.string,
};

export default ThemePanel;

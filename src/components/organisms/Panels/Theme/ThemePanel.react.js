import { ColorPicker } from '@atoms';
import { THEME } from '@constants';
import { useUserTheme } from '@hooks';
import { ColorProperty } from '@molecules';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';
import ThemeProperty from './ThemeProperty.react';

const Container = styled.div`
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

  const themeProperties = useMemo(
    () => [
      [`Pipeline Type`, colors.pipeline.type, `pipeline.type`],
      [`Pipeline Status`, colors.pipeline.status, `pipeline.status`],
      [`Task Status`, colors.task.status, `task.status`],
    ],
    [colors],
  );

  return (
    <Container className={className}>
      <ThemeProperty title="Palettes" isPallette currPath={path} onClick={onPathChange} />
      {themeProperties.map(([title, properties, propertyPath]) => (
        <ThemeProperty
          key={propertyPath}
          title={title}
          currPath={path}
          properties={properties}
          propertyPath={propertyPath}
          onClick={setTheme}
        />
      ))}
      <ColorPicker color={value} onChange={onColorChange} disabled={isPallette(path)} />
    </Container>
  );
};

ThemePanel.propTypes = {
  className: PropTypes.string,
};

export default ThemePanel;

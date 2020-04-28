import { useUserTheme } from '@hooks';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

const ThemeProvider = ({ children }) => {
  const { theme } = useUserTheme();

  const { backgroundGradient, headerGradient, textSecondary, mode, background, name } = theme;

  return (
    <SCThemeProvider
      theme={{ name, mode, background, backgroundGradient, headerGradient, textSecondary }}>
      {children}
    </SCThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  controlledIndex: PropTypes.number,
};

export default ThemeProvider;

import { LOCAL_STORAGE } from '@constants';
import { useLocalStorage } from 'beautiful-react-hooks';
import isEqual from 'lodash.isequal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';

const useTheme = () => {
  const theme = useSelector(state => state.theme, isEqual);
  const [, setLocalStorageTheme] = useLocalStorage(LOCAL_STORAGE.THEME, theme);

  const {
    theme: { setProperty, setPallette },
  } = useActions();

  useEffect(() => {
    setLocalStorageTheme(theme);
  }, [setLocalStorageTheme, theme]);

  const { background, colors } = theme;
  return { colors, background, setProperty, setPallette };
};

export default createStore(useTheme);

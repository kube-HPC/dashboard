import { LOCAL_STORAGE } from '@constants';
import isEqual from 'lodash.isequal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';
import useLocalStorage from './useLocalStorage';

const useUserTheme = () => {
  const theme = useSelector(state => state.theme, isEqual);
  const [, setLocalStorageTheme] = useLocalStorage(LOCAL_STORAGE.THEME, theme);

  const {
    theme: { setProperty, setPalette },
  } = useActions();

  useEffect(() => {
    setLocalStorageTheme(theme);
  }, [setLocalStorageTheme, theme]);

  return { theme, setProperty, setPalette: setPalette };
};

export default createStore(useUserTheme);

import { LOCAL_STORAGE, THEME } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { palettes } from '@styles';
import { getLocalStorageItem } from '@utils';
import { setPalette, setProperty } from './theme.reducers';

const initialState = getLocalStorageItem(LOCAL_STORAGE.THEME) || palettes[THEME.palette.default];

const themeSlice = createSlice({
  name: `theme`,
  initialState,
  reducers: {
    setProperty,
    setPalette,
  },
});

export default themeSlice;

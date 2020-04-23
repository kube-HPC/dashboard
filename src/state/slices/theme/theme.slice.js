import { LOCAL_STORAGE, THEME } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { pallettes } from '@styles';
import { getLocalStorageObjectItem } from '@utils';
import { setPallette, setProperty } from './theme.reducers';

const initialState =
  getLocalStorageObjectItem(LOCAL_STORAGE.THEME) || pallettes[THEME.pallette.default];

const themeSlice = createSlice({
  name: `theme`,
  initialState,
  reducers: {
    setProperty,
    setPallette,
  },
});

export default themeSlice;

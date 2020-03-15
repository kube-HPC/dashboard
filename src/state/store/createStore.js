import { configureStore } from '@reduxjs/toolkit';
import middleware from './middleware';
import reducer from './reducer';

const createStore = () =>
  configureStore({
    reducer,
    middleware,
  });

export default createStore;

// @flow
import fromEntries from 'object.fromentries';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createStore } from 'reusable';
import { actions as actionsMapper } from 'state';

// src/state/store/actions.js

if (!Object.fromEntries) {
  fromEntries.shim();
}

type DispatcherType = {
  theme: {
    setProperty: ({ path: string, value: string }) => void,
    setPalette: (path: string) => void,
  },
};

const useActions = () => {
  const dispatch = useDispatch();

  const createDispatch = useCallback((action: any) => (params: any) => dispatch(action(params)), [
    dispatch,
  ]);

  const objectMapped = Object.entries(actionsMapper).map(([sliceName, actions]) => [
    sliceName,
    Object.fromEntries(
      Object.entries(actions).map(([key, action]) => [key, createDispatch(action)]),
    ),
  ]);
  const dispatcher: DispatcherType = Object.fromEntries(objectMapped);

  return dispatcher;
};

export default createStore(useActions);

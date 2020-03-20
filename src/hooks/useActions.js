import actionsMapper from '@actions';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createStore } from 'reusable';

const useActions = () => {
  const dispatch = useDispatch();

  const createDispatch = useCallback(action => params => dispatch(action(params)), [dispatch]);

  const objectMapped = Object.entries(actionsMapper).map(([sliceName, actions]) => [
    sliceName,
    Object.fromEntries(
      Object.entries(actions).map(([key, action]) => [key, createDispatch(action)]),
    ),
  ]);
  const dispatcher = Object.fromEntries(objectMapped);

  return dispatcher;
};

export default createStore(useActions);
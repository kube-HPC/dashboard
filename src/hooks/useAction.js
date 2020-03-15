import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useAction = action => {
  const dispatch = useDispatch();
  const dispatcher = useCallback(params => dispatch(action(params)), [action, dispatch]);

  return dispatcher;
};

export default useAction;

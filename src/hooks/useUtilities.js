import { useCallback } from 'react';
import useActions from './useActions';

const useUtilities = () => {
  const {
    panel: { set },
  } = useActions();

  const onAction = useCallback(
    ({ name, action }) => {
      set(name);
      action?.();
    },
    [set],
  );

  return { set, onAction };
};

export default useUtilities;

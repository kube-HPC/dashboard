import { useCallback } from 'react';
import useActions from './useActions';

const useUtilities = () => {
  const {
    panel: { setValue },
  } = useActions();

  const onAction = useCallback(
    ({ name, action }) => {
      setValue(name);
      action?.();
    },
    [setValue],
  );

  return { setValue, onAction };
};

export default useUtilities;

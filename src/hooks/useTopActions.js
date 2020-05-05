import { TOP_BAR } from '@config';
import { PANEL } from '@constants';
import { NOOP } from '@utils';
import { useCallback } from 'react';
import usePanel from './usePanel';

const useTopActions = () => {
  const { value, set: setValue } = usePanel();

  const setThemePanel = useCallback(
    () => setValue(value === PANEL.theme ? PANEL.welcome : PANEL.theme),
    [setValue, value],
  );

  const topRightIcons = [NOOP, setThemePanel, NOOP, NOOP].map((action, index) => ({
    name: TOP_BAR.rightIcons[index].name,
    action,
  }));

  return { topRightIcons };
};

export default useTopActions;

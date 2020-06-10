import { TOP_BAR } from '@config';
import { PANEL } from '@constants';
import { NOOP } from '@utils';
import { useCallback, useMemo } from 'react';
import usePanel from './usePanel';

const useTopActions = () => {
  const { value, set: setValue } = usePanel();

  const setThemePanel = useCallback(
    () => setValue(value === PANEL.theme ? PANEL.welcome : PANEL.theme),
    [setValue, value],
  );

  const setSettingsPanel = useCallback(() => setValue(PANEL.settings), [setValue]);

  const topRightIcons = useMemo(
    () =>
      [NOOP, setThemePanel, setSettingsPanel, NOOP].map((action, index) => ({
        name: TOP_BAR.rightIcons[index],
        action,
      })),
    [setThemePanel, setSettingsPanel],
  );

  const setFilterPanel = useCallback(() => setValue(PANEL.filter), [setValue]);

  const topLeftIcons = useMemo(
    () =>
      [setFilterPanel].map((action, index) => ({
        name: TOP_BAR.leftIcons[index],
        action,
      })),
    [setFilterPanel],
  );

  return { topRightIcons, topLeftIcons };
};

export default useTopActions;

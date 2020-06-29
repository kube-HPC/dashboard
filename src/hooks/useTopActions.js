import { TOP_BAR } from '@config';
import { PANEL } from '@constants';
import { socketSlice } from '@slices';
import { NOOP } from '@utils';
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import usePanel from './usePanel';

const useTopActions = () => {
  const { value, set: setValue } = usePanel();
  const isSocketConnected = useSelector(socketSlice.selectors.isConnected);

  const topRightIcons = useMemo(() => {
    const rightIcons = isSocketConnected ? TOP_BAR.rightIcons : [`noWifi`, ...TOP_BAR.rightIcons];
    const setThemePanel = () => setValue(value === PANEL.theme ? PANEL.welcome : PANEL.theme);
    const setSettingsPanel = () => setValue(PANEL.settings);
    const setSocketPanel = () => setValue(PANEL.socket);

    const rightActions = [setThemePanel, setSettingsPanel, NOOP];

    const actionsWithConnected = isSocketConnected
      ? rightActions
      : [setSocketPanel, ...rightActions];

    return actionsWithConnected.map((action, index) => ({
      name: rightIcons[index],
      action,
    }));
  }, [isSocketConnected, setValue, value]);

  const setFilterPanel = useCallback(() => setValue(PANEL.filter), [setValue]);

  const topLeftIcons = useMemo(
    () =>
      [setFilterPanel].map((action, index) => ({
        name: TOP_BAR.leftIcons[index],
        action,
      })),
    [setFilterPanel],
  );

  return { topRightIcons, topLeftIcons, isSocketConnected };
};

export default useTopActions;

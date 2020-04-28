import { TOP_BAR } from '@config';
import { PANEL } from '@constants';
import { NOOP } from '@utils';
import usePanel from './usePanel';

const useTopActions = () => {
  const { value, set: setValue } = usePanel();

  const setThemePanel = () => setValue(value === PANEL.theme ? PANEL.welcome : PANEL.theme);

  const topRightIcons = [NOOP, setThemePanel, NOOP, NOOP].map((action, index) => ({
    name: TOP_BAR.rightIcons[index].name,
    action,
  }));

  return { topRightIcons };
};

export default useTopActions;

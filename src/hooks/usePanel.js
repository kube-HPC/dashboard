import { MEDIA_QUERIES, PANEL } from '@constants';
import { useActions } from '@hooks';
import { FilterPanel, JobPanel, ThemePanel, WelcomePanel } from '@organisms';
import { panelSelector } from '@utils';
import { useMediaQuery } from 'beautiful-react-hooks';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';

const PANEL_CONTENT = {
  [PANEL.welcome]: WelcomePanel,
  [PANEL.jobs]: JobPanel,
  [PANEL.theme]: ThemePanel,
  [PANEL.filter]: FilterPanel,
};

const usePanel = () => {
  const {
    dashboard: { setPanel, togglePanel },
  } = useActions();

  const { expanded, value: panelName } = useSelector(panelSelector);

  const isMdQuery = useMediaQuery(MEDIA_QUERIES.md);
  const mode = panelName || PANEL.welcome;

  return {
    value: panelName,
    set: setPanel,
    toggle: togglePanel,
    expanded,
    Content: PANEL_CONTENT[mode],
    mode,
    isMdQuery,
  };
};

export default createStore(usePanel);

import { MEDIA_QUERIES, PANEL } from '@constants';
import { useActions } from '@hooks';
import { FilterPanel, JobPanel, ThemePanel, WelcomePanel } from '@organisms';
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
    panel: { set, toggle },
  } = useActions();

  const { expanded, value: panelName } = useSelector(state => state.panel);

  const isMdQuery = useMediaQuery(MEDIA_QUERIES.md);
  const mode = panelName || PANEL.welcome;

  return {
    value: panelName,
    set,
    toggle,
    expanded,
    Content: PANEL_CONTENT[mode],
    mode,
    isMdQuery,
  };
};

export default createStore(usePanel);

import { MEDIA_QUERIES, PANEL } from '@constants';
import { useActions } from '@hooks';
import { Welcome } from '@molecules';
import { JobPanel, ThemePanel } from '@organisms';
import { useMediaQuery } from 'beautiful-react-hooks';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';

const PANEL_CONTENT = {
  [PANEL.welcome]: Welcome,
  [PANEL.jobs]: JobPanel,
  [PANEL.theme]: ThemePanel,
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

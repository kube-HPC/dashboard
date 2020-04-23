import { MEDIA_QUERIES, PANEL } from '@constants';
import { useActions } from '@hooks';
import { Welcome } from '@molecules';
import { JobPanel, ThemePanel } from '@organisms';
import { useMediaQuery } from 'beautiful-react-hooks';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useJobs from './useJobs';

const PANEL_CONTENT = {
  [PANEL.welcome]: Welcome,
  [PANEL.jobs]: JobPanel,
  [PANEL.theme]: ThemePanel,
};

const usePanel = () => {
  const {
    panel: { setValue, toggle },
  } = useActions();
  const { expanded, value: panelName } = useSelector(state => state.panel);

  const isMdQuery = useMediaQuery(MEDIA_QUERIES.md);
  const { selected } = useJobs();

  const mode = selected ? PANEL.jobs : panelName || PANEL.welcome;

  return {
    value: panelName,
    setValue,
    toggle,
    expanded,
    Content: PANEL_CONTENT[mode],
    mode,
    isMdQuery,
  };
};

export default createStore(usePanel);

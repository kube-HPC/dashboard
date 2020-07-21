import { PANEL, SB_LABELS } from '@constants';
import { InPanel } from '@storybookHelpers';
import React from 'react';
import SettingsPanel from './SettingsPanel.react';

export const Content = SettingsPanel;
export const InPanel$ = () => <InPanel panel={PANEL.settings} />;

export default {
  title: `${SB_LABELS.ORGANISMS}Panels/Settings Panel`,
};

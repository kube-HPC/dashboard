import { SB_LABELS } from '@constants';
import React from 'react';
import { Panel } from '..';
import Welcome from './Welcome.react';

export default {
  title: `${SB_LABELS.MOLECULES}Welcome Panel`,
};

export const Default = Welcome;
export const InPanel = () => (
  <Panel>
    <Welcome />
  </Panel>
);

import { SB_LABELS } from '@constants';
import React from 'react';
import Tooltip from './Tooltip.react';

export default {
  title: `${SB_LABELS.ATOMS}Tooltip`,
};

export const Default = () => (
  <Tooltip x={0} y={0}>
    Tooltip Text
  </Tooltip>
);

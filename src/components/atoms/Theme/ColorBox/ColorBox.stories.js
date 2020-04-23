import { SB_LABELS } from '@constants';
import React from 'react';
import ColorBox from './ColorBox.react';

export default {
  title: `${SB_LABELS.ATOMS}Theme/Color Box`,
};

export const Default = () => <ColorBox color={`#000`} />;

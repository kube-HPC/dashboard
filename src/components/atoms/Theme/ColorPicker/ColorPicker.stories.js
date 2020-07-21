import { SB_LABELS } from '@constants';
import React from 'react';
import ColorPicker from './ColorPicker.react';

export default {
  title: `${SB_LABELS.ATOMS}Theme/Color Picker`,
};

export const Default = ColorPicker;
export const Disabled = () => <ColorPicker disabled={true} />;

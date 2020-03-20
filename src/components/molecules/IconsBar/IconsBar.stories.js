import { SB_LABELS } from '@constants';
import icons from '@icons';
import React from 'react';
import IconsBar from './IconsBar.react';

export default {
  title: `${SB_LABELS.MOLECULES}Icons Bar`,
};

const iconNames = Object.keys(icons);

export const Default = () => <IconsBar icons={iconNames} />;

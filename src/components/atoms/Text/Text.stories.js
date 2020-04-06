import { SB_LABELS } from '@constants';
import React from 'react';
import Text from './Text.react';

export default {
  title: `${SB_LABELS.ATOMS}Text`,
};

export const Example = () => <Text>Example</Text>;
export const Bold = () => <Text bold>Example</Text>;

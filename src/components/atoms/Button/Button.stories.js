/* @flow */
import {SB_LABELS} from '@constants';
import React from 'react';
import Button from './Button.react';

export const Example = () => <Button>Example</Button>;

export default {
  title: `${SB_LABELS.ATOMS}${Button.name}`,
  component: Button,
};

import { SB_LABELS } from '@constants';
import { theme } from '@styles';
import React from 'react';
import Header from './Header.react';

export default {
  title: `${SB_LABELS.ATOMS}Header`,
};

export const Default = () => <Header>Header</Header>;
export const Colored = () => (
  <Header bg={theme.palette.PRIMARY} color="white">
    Header
  </Header>
);
export const Small = () => <Header small>Header</Header>;

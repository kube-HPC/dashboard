// @flow
import { PANEL, SB_LABELS } from '@constants';
import { decorate, InPanel } from '@storybookHelpers';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import { ErrorsPanel } from './ErrorsPanel.react';

export const Content = () => <ErrorsPanel />;
export const InPanel$ = () => <InPanel panel={PANEL.errors} />;

const Decorator = styled.div`
  ${mixins.fillScreen}
`;

export default {
  title: `${SB_LABELS.ORGANISMS}Panels/${ErrorsPanel.name}`,
  component: ErrorsPanel,
  decorators: decorate(Decorator),
};

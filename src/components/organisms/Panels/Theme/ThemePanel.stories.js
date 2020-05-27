import { PANEL, SB_LABELS } from '@constants';
import { InPanel } from '@storybookHelpers';
import React from 'react';
import tw from 'twin.macro';
import ThemePanel from './ThemePanel.react';

const Decorator = tw.div`h-screen`;

export default {
  title: `${SB_LABELS.ORGANISMS}Panels/Theme Panel`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

export const Content = ThemePanel;

export const InPanel$ = () => <InPanel panel={PANEL.theme} />;

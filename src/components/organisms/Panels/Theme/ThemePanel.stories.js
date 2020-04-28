import { PANEL, SB_LABELS } from '@constants';
import { usePanel } from '@hooks';
import { Panel } from '@molecules';
import React, { useEffect } from 'react';
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

export const InPanel = () => {
  const { set: setValue } = usePanel();
  useEffect(() => {
    setValue(PANEL.theme);
  }, [setValue]);

  return <Panel />;
};

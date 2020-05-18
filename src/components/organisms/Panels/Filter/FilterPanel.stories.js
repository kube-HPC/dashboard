import { PANEL, SB_LABELS } from '@constants';
import { InPanel } from '@storybookHelpers';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FilterPanel from './FilterPanel.react';

export const Content = FilterPanel;
export const InPanel$ = () => <InPanel panel={PANEL.filter} />;

export default {
  title: `${SB_LABELS.ORGANISMS}Panels/Filter Panel`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

const Decorator = styled.div`
  ${tw`h-screen p-5`}
`;

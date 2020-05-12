import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FilterPanel from './FilterPanel.react';

const Decorator = styled.div`
  ${tw``}
`;

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

export const Default = FilterPanel;

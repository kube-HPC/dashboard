import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ColorSettings from './ColorSettings.react';

const Decorator = styled.div`
  ${tw``}
`;

export default {
  title: `${SB_LABELS.MOLECULES}Color Settings`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

export const Default = ColorSettings;
export const Example = () => <ColorSettings>Example</ColorSettings>;

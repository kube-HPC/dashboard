import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ColorPicker from './ColorPicker.react';

const Decorator = styled.div`
  ${tw``}
`;

export default {
  title: `${SB_LABELS.ATOMS}Theme/Color Picker`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

export const Default = ColorPicker;
export const Disabled = () => <ColorPicker disabled={true} />;

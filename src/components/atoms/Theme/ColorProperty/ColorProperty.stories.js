import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ColorProperty from './ColorProperty.react';

const Decorator = styled.div`
  ${mixins.flexCenter}
  ${ColorProperty.SC} {
    ${tw`w-1/12`}
  }
`;

export default {
  title: `${SB_LABELS.ATOMS}Theme/Color Property`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

export const Default = () => <ColorProperty color={`#000`}>Color</ColorProperty>;

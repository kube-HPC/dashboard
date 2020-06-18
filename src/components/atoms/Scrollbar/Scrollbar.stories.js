import { SB_LABELS } from '@constants';
import React from 'react';
import tw, { styled } from 'twin.macro';
import Scrollbar from './Scrollbar.react';

const Decorator = styled.div`
  ${tw`h-screen w-1/2 border-2 border-orange-500`}
  ${Scrollbar.Thumb.className} {
    ${tw`bg-orange-900`}
  }
`;

export default {
  title: `${SB_LABELS.ATOMS}Scrollbar`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

const longText = [...Array(100).keys()].map(key => <div key={key}>{key}</div>);
export const Default = () => <Scrollbar>{longText}</Scrollbar>;

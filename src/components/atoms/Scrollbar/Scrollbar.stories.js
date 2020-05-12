import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Scrollbar from './Scrollbar.react';

const Decorator = styled.div`
  ${tw`h-screen w-1/2 border-2 border-yellow-300 m-2 p-5`}
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

import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Selection from './Selection.react';

export const Default = () => {
  const [selected, setSelected] = useState([]);

  const onClick = () => setSelected(p => [...p, p.length]);
  const onSelect = (value, index) =>
    setSelected(p => {
      const copy = [...p];
      copy.splice(index, 1);
      return copy;
    });

  return (
    <>
      <Button onClick={onClick}>Generate</Button>
      <br />
      <Selection selected={selected} onSelect={onSelect} />
      <br />
      <h1>Selection Bar</h1>
    </>
  );
};

const Button = styled.button`
  ${tw`border p-2`}
`;

const Decorator = styled.div`
  ${mixins.flexCenter}
  ${tw`flex-col`}
  ${mixins.fillScreen}
  ${Selection.className} {
    ${tw`w-1/2`}
  }
`;

export default {
  title: `${SB_LABELS.ATOMS}Selection`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React, { useState } from 'react';
import { styled, tw } from 'twin.macro';
import MultiSelect from './MultiSelect.react';

const options = [...Array(20).keys()].map(key => `Options-${key}`);

export const Default = () => {
  const [selected, setSelected] = useState([`Default-1`, `Default-2`]);

  const onDeselect = (value, index) =>
    setSelected(p => {
      const copy = [...p];
      copy.splice(index, 1);
      return copy;
    });

  const onSelect = value => setSelected(p => [...p, value]);

  return (
    <>
      <MultiSelect
        selected={selected}
        onSelect={onSelect}
        onDeselect={onDeselect}
        options={options}
      />
      <br />
      <h1>Multi Select</h1>
    </>
  );
};

const Decorator = styled.div`
  ${mixins.flexCenter}
  ${tw`flex-col`}
  ${mixins.fillScreen}
  ${MultiSelect.className} {
    ${tw`w-1/2`}
  }
`;

export default {
  title: `${SB_LABELS.MOLECULES}Multi Select`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

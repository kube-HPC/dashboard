import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Radio from './Radio.react';

export const Children = () => {
  const [value, setValue] = useState(0);
  return (
    <Radio value={value} onChange={setValue}>
      <Radio.Option value={0}>Option 1</Radio.Option>
      <Radio.Option value={1}>Option 2</Radio.Option>
      <Radio.Option value={2}>Option 3</Radio.Option>
      <Radio.Option value={3}>Option 4</Radio.Option>
      <Radio.Option value={4}>Option 5</Radio.Option>
    </Radio>
  );
};

const OPTIONS = [...Array(5).keys()].map(key => `Option ${key + 1}`);

export const Options = () => {
  const [value, setValue] = useState(OPTIONS[0]);
  return <Radio value={value} onChange={setValue} options={OPTIONS} />;
};

const Decorator = styled.div`
  ${mixins.flexCenter}
  ${mixins.fillContainer}
  ${tw``}
`;

export default {
  title: `${SB_LABELS.ATOMS}Radio`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

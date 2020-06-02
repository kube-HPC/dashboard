import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import tw, { styled } from 'twin.macro';
import RadioSelect from './RadioSelect.react';

export const Children = () => (
  <RadioSelect>
    <RadioSelect.Option>Option 1</RadioSelect.Option>
    <RadioSelect.Option>Option 2</RadioSelect.Option>
    <RadioSelect.Option>Option 3</RadioSelect.Option>
    <RadioSelect.Option>Option 4</RadioSelect.Option>
    <RadioSelect.Option>Option 5</RadioSelect.Option>
  </RadioSelect>
);

const OPTIONS = [...Array(5).keys()].map(key => `Option ${key + 1}`);

export const Options = () => <RadioSelect options={OPTIONS} />;

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

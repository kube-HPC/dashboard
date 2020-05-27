import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import { styled, tw } from 'twin.macro';
import Dropdown from './Dropdown.react';

const options = [...Array(5).keys()].map(key => `Option-${key}`);

export const Default = () => <Dropdown options={options} />;
export const WithChildren = () => (
  <Dropdown totalItems={3}>
    {options.map(option => (
      <Dropdown.Option key={option} role="button">
        <span>{option}</span>
      </Dropdown.Option>
    ))}
  </Dropdown>
);

const Decorator = styled.div`
  ${mixins.fillScreen}
  ${mixins.flexCenter}
  ${Dropdown.className} {
    ${tw`w-1/2`}
  }
`;

export default {
  title: `${SB_LABELS.ATOMS}Dropdown`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

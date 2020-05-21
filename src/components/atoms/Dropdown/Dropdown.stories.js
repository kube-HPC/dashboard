import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React from 'react';
import { styled, tw } from 'twin.macro';
import Dropdown from './Dropdown.react';

export const Default = () => (
  <Dropdown totalItems={3} isVisible>
    {[...Array(5).keys()].map(key => (
      <Dropdown.Option key={key} role="button">
        <span>Option-{key + 1}</span>
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

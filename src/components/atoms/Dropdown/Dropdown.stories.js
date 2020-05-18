import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Dropdown from './Dropdown.react';

export const Default = Dropdown;
export const Example = () => <Dropdown>Example</Dropdown>;

const Decorator = styled.div`
  ${tw``}
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

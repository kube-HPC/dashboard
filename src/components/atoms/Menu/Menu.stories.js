import { SB_LABELS, sidebarValues } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Menu from './Menu.react';

export default {
  title: `${SB_LABELS.ATOMS}Menu`,
};

const MenuUpper = styled(Menu)`
  ${tw`uppercase`}
`;

export const Default = () => (
  <MenuUpper>
    {sidebarValues.map(value => (
      <div key={value}>{value}</div>
    ))}
  </MenuUpper>
);

import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import React, { useReducer } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  IconExpand,
  IconFilter,
  IconMoon,
  IconSearch,
  IconSettings,
  IconSignal,
  IconWarning,
} from './index';

const Container = styled.div`
  ${mixins.flexCenter}
  svg {
    ${tw`fill-current w-1/3`}
  }
`;

export default {
  title: `${SB_LABELS.ATOMS}Icons`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

export const warning = IconWarning;
export const settings = IconSettings;
export const filter = IconFilter;
export const moon = IconMoon;
export const search = IconSearch;
export const signal = IconSignal;

export const Expand = () => {
  const [expanded, toggle] = useReducer(p => !p, false);
  return (
    <>
      <IconExpand expanded={expanded} onClick={toggle} />
    </>
  );
};

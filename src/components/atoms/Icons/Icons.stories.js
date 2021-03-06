import {SB_LABELS} from '@constants';
import {decorate} from '@storybookHelpers';
import {mixins} from '@styles';
import React, {useReducer} from 'react';
import tw, {styled} from 'twin.macro';
import {
  IconExpand,
  IconFileDownload,
  IconFilter,
  IconMoon,
  IconSearch,
  IconSettings,
  IconWarning,
} from './index';

export const warning = IconWarning;
export const settings = IconSettings;
export const filter = IconFilter;
export const moon = IconMoon;
export const search = IconSearch;
export const fileDownload = IconFileDownload;

export const Expand = () => {
  const [expanded, toggle] = useReducer(p => !p, false);
  return (
    <>
      <IconExpand expanded={expanded} onClick={toggle} />
    </>
  );
};

const Container = styled.div`
  ${mixins.flexCenter}
  svg {
    ${tw`fill-current w-1/3`}
  }
`;

export default {
  title: `${SB_LABELS.ATOMS}Icons`,
  decorators: decorate(Container),
};

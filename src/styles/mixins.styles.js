import { THEME } from '@constants';
import { theme } from 'styled-tools';
import tw, { css } from 'twin.macro';
import { onMode } from '../utils/styles';

const fillScreen = css`
  ${tw`w-screen h-screen`}
`;

const fillContainer = css`
  ${tw`w-full h-full`}
`;

const flexCenter = css`
  ${tw`flex justify-center items-center`}
`;

const flexStart = css`
  ${flexCenter}
  ${tw`items-start justify-start`}
`;

const flexEnd = css`
  ${flexCenter}
  ${tw`items-end justify-end`}
`;

const flexBetween = css`
  ${flexCenter}
  ${tw`justify-between`}
`;

const fixed = css`
  ${tw`fixed z-10`}
`;

const timingSlow = css`
  ${tw`ease-in-out duration-700`}
`;

const timingNormal = css`
  ${timingSlow}
  ${tw`duration-500`}
`;

const colorOnFocus = css`
  ${tw`cursor-pointer`}
  ${timingSlow}
  ${tw`transition-opacity hocus:opacity-50`}
  ${onMode(tw`hocus:text-black`, tw`hocus:text-white`)}
`;

const textSecondary = css`
  ${theme(THEME.value.textSecondary)}
`;

const card = css`
  ${tw`rounded-md`}
  ${tw`p-3 text-center`}
  ${theme(THEME.value.background)}
`;

const opacityFocus = css`
  ${tw`transition-opacity ease-in-out duration-200 hocus:opacity-50`}
`;

const mixins = {
  card,
  colorOnFocus,
  fillContainer,
  fillScreen,
  fixed,
  flexBetween,
  flexCenter,
  flexEnd,
  flexStart,
  textSecondary,
  timingNormal,
  timingSlow,
  opacityFocus,
};

export default mixins;

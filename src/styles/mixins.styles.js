import { css } from 'styled-components';
import tw from 'twin.macro';

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

const colorOnFocus = css`
  ${tw`hocus:text-black cursor-pointer`}
`;

const upperCase = css`
  ${tw`uppercase`}
`;

const textSecondary = css`
  ${tw`text-secondary`}
`;

const rounded = css`
  ${tw`rounded-lg`}
`;

const card = css`
  ${rounded}
  ${tw`bg-white p-3 text-center`}
`;

const timingSlow = css`
  ${tw`ease-in-out duration-700`}
`;

const timingNormal = css`
  ${timingSlow}
  ${tw`duration-500`}
`;

const mixins = {
  colorOnFocus,
  timingNormal,
  fillContainer,
  fixed,
  flexBetween,
  flexCenter,
  flexEnd,
  flexStart,
  rounded,
  textSecondary,
  upperCase,
  card,
  timingSlow,
};

export default mixins;

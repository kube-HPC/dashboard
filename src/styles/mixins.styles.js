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

const flexBetween = css`
  ${flexCenter}
  ${tw`justify-between`}
`;

const fixed = css`
  ${tw`fixed z-10`}
`;

const colorOnFocus = css`
  ${tw`transition-colors duration-300 text-secondary fill-current hocus:text-black cursor-pointer`}
`;

const mixins = {
  flexCenter,
  flexStart,
  flexBetween,
  fillContainer,
  fixed,
  colorOnFocus,
};

export default mixins;

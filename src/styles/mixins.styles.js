import { css } from 'styled-components';
import tw from 'tailwind.macro';

const button = css`
  svg {
    margin-right: 10px;
    width: 2em;
  }
  ${tw`flex justify-around items-center bg-white
    hover:bg-gray-100 text-gray-800 font-semibold
    py-2 px-4 border border-gray-400 rounded shadow`}
`;

const flexCenter = css`
  ${tw`flex justify-center items-center`}
`;

const flexStart = css`
  ${flexCenter}
  ${tw`items-baseline`}
`;

const flexBetween = css`
  ${flexCenter}
  ${tw`justify-between`}
`;

const reveal = css`
  animation: show 2s ease-in normal;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const fixed = css`
  ${tw`fixed z-10 m-5`}
`;

const box = css`
  ${tw`
    block appearance-none bg-white border leading-tight
    border-gray-400 hover:border-gray-500 px-4 py-2
    rounded shadow focus:outline-none focus:shadow-outline
    `}
`;

const mixins = {
  button,
  flexCenter,
  flexStart,
  flexBetween,
  reveal,
  fixed,
  box,
};

export default mixins;

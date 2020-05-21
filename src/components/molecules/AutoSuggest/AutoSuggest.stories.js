import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import { jobIdsSelector } from '@utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { styled, tw } from 'twin.macro';
import AutoSuggest from './AutoSuggest.react';

const options = [`chocolate`, `strawberry`, `vanilla`];

export const DefaultSuggestion = () => (
  <AutoSuggest placeholder="Taste" isSuggestion options={options} />
);
export const JobsSuggestion = () => {
  const jobs = useSelector(jobIdsSelector);
  return <AutoSuggest placeholder="Job Id" options={jobs} />;
};

const Decorator = styled.div`
  ${mixins.flexCenter}
  ${tw`w-full h-screen flex-col space-y-1`}
  ${AutoSuggest.className} {
    ${tw`w-1/2`}
  }
`;

export default {
  title: `${SB_LABELS.MOLECULES}Auto Suggest`,
  decorators: [
    S => (
      <Decorator>
        <S />
        <h1>Auto Complete Input</h1>
      </Decorator>
    ),
  ],
};

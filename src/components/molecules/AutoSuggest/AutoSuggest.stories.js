import { SB_LABELS } from '@constants';
import { mixins } from '@styles';
import { jobIdsSelector } from '@utils';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';
import AutoSuggest from './AutoSuggest.react';

const options = [
  { value: `chocolate`, label: `Chocolate` },
  { value: `strawberry`, label: `Strawberry` },
  { value: `vanilla`, label: `Vanilla` },
];

export const DefaultSuggestion = () => <AutoSuggest isSuggestion options={options} />;
export const JobsSuggestion = () => {
  const jobs = useSelector(jobIdsSelector);
  const jobOptions = jobs?.map(jobId => ({ value: jobId, label: jobId })) ?? [];
  return <AutoSuggest options={jobOptions} />;
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

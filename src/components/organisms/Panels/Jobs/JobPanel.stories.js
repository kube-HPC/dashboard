import { PANEL, SB_LABELS } from '@constants';
import { InPanel, JobSelectHelper } from '@storybookHelpers';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobPanel from './JobPanel.react';

export const Content = JobPanel;

export const InPanel$ = () => <InPanel panel={PANEL.jobs} />;

const Decorator = styled.div`
  ${mixins.flexStart}
  ${tw`h-screen items-center p-2`}
`;

export default {
  title: `${SB_LABELS.ORGANISMS}Panels/Job Panel`,
  decorators: [
    S => (
      <Decorator>
        <S />
        <JobSelectHelper />
      </Decorator>
    ),
  ],
};

import { SB_LABELS } from '@constants';
import { Panel } from '@molecules';
import { JobSelectHelper } from '@utils';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobPanel from './JobPanel.react';

const Decorator = styled.div`
  ${tw`h-full`}
`;

export default {
  title: `${SB_LABELS.ORGANISMS}Panels/Job Panel`,
  decorators: [
    S => (
      <Decorator>
        <JobSelectHelper />
        <S />
      </Decorator>
    ),
  ],
};

export const Content = JobPanel;

export const InPanel = () => (
  <Panel>
    <JobPanel />
  </Panel>
);

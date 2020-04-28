import { PANEL, SB_LABELS } from '@constants';
import { usePanel } from '@hooks';
import { Panel } from '@molecules';
import { JobSelectHelper } from '@storybookHelpers';
import { mixins } from '@styles';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobPanel from './JobPanel.react';

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

export const Content = JobPanel;

export const InPanel = () => {
  const { set: setValue } = usePanel();
  useEffect(() => {
    setValue(PANEL.jobs);
  }, [setValue]);
  return <Panel />;
};

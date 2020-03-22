import { SB_LABELS } from '@constants';
import { pipelineStatuses as PIPELINE } from '@hkube/consts';
import { COLORS } from '@styles';
import React from 'react';
import Tag from './Tag.react';

export default {
  title: `${SB_LABELS.ATOMS}Tag`,
};

export const Default = () => <Tag>Simple Tag</Tag>;
export const Running = () => <Tag color={COLORS.pipeline.status[PIPELINE.RUNNING]}>Running</Tag>;
export const Completed = () => (
  <Tag color={COLORS.pipeline.status[PIPELINE.COMPLETED]}>Running</Tag>
);

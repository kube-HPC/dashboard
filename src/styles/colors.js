import { pipelineStatuses as PIPELINE } from '@hkube/consts';
import tw from 'twin.macro';

export const COLORS = {
  pipeline: {
    [PIPELINE.RUNNING]: tw`bg-blue-400`.backgroundColor,
    [PIPELINE.COMPLETED]: tw`bg-green-400`.backgroundColor,
  },
};

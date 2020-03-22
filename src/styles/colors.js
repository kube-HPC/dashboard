import { pipelineStatuses as PIPELINE, pipelineTypes as PIPELINE_TYPE } from '@hkube/consts';
import tw from 'twin.macro';

const variant = `backgroundColor`;

export const COLORS = {
  pipeline: {
    type: {
      [PIPELINE_TYPE.ALGORITHM]: tw`bg-orange-400`[variant],
      [PIPELINE_TYPE.CRON]: tw`bg-indigo-400`[variant],
      [PIPELINE_TYPE.INTERNAL]: tw`bg-pink-400`[variant],
      [PIPELINE_TYPE.NODE]: tw`bg-green-400`[variant],
      [PIPELINE_TYPE.RAW]: tw`bg-red-400`[variant],
      [PIPELINE_TYPE.STORED]: tw`bg-blue-400`[variant],
      [PIPELINE_TYPE.SUB_PIPELINE]: tw`bg-purple-400`[variant],
      [PIPELINE_TYPE.TENSORBOARD]: tw`bg-yellow-400`[variant],
      [PIPELINE_TYPE.TRIGGER]: tw`bg-teal-400`[variant],
    },
    status: {
      [PIPELINE.COMPLETED]: tw`bg-green-300`[variant],
      [PIPELINE.RUNNING]: tw`bg-blue-300`[variant],
      [PIPELINE.FAILED]: tw`bg-red-300`[variant],
      [PIPELINE.STOPPED]: tw`bg-orange-300`[variant],
      [PIPELINE.ACTIVE]: tw`bg-teal-300`[variant],
      [PIPELINE.CRASHED]: tw`bg-teal-300`[variant],
      [PIPELINE.PAUSED]: tw`bg-yellow-300`[variant],
      [PIPELINE.PENDING]: tw`bg-gray-300`[variant],
      [PIPELINE.RESUMED]: tw`bg-indigo-300`[variant],
      [PIPELINE.STALLED]: tw`bg-purple-300`[variant],
    },
  },
};

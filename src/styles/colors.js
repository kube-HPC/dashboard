import {
  pipelineStatuses as PIPELINE,
  pipelineTypes as PIPELINE_TYPE,
  taskStatuses as TASK,
} from '@hkube/consts';
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
      [PIPELINE.ACTIVE]: tw`bg-blue-400`[variant],
      [PIPELINE.COMPLETED]: tw`bg-green-500`[variant],
      [PIPELINE.CRASHED]: tw`bg-teal-500`[variant],
      [PIPELINE.FAILED]: tw`bg-red-500`[variant],
      [PIPELINE.PAUSED]: tw`bg-yellow-500`[variant],
      [PIPELINE.PENDING]: tw`bg-gray-500`[variant],
      [PIPELINE.RESUMED]: tw`bg-indigo-500`[variant],
      [PIPELINE.RUNNING]: tw`bg-blue-500`[variant],
      [PIPELINE.STALLED]: tw`bg-purple-500`[variant],
      [PIPELINE.STOPPED]: tw`bg-orange-500`[variant],
    },
    priority: {
      1: tw`bg-red-700`[variant],
      2: tw`bg-orange-700`[variant],
      3: tw`bg-orange-500`[variant],
      4: tw`bg-yellow-400`[variant],
      5: tw`bg-green-500`[variant],
    },
  },
  task: {
    status: {
      [TASK.ACTIVE]: tw`bg-blue-500`[variant],
      [TASK.COMPLETED]: tw`bg-green-500`[variant],
      [TASK.CRASHED]: tw`bg-gray-500`[variant],
      [TASK.CREATING]: tw`bg-green-400`[variant],
      [TASK.FAILED]: tw`bg-red-500`[variant],
      [TASK.PENDING]: tw`bg-gray-400`[variant],
      [TASK.PRESCHEDULE]: tw`bg-pink-500`[variant],
      [TASK.SKIPPED]: tw`bg-indigo-500`[variant],
      [TASK.STALLED]: tw`bg-purple-500`[variant],
      [TASK.STORING]: tw`bg-yellow-300`[variant],
      [TASK.SUCCEED]: tw`bg-green-600`[variant],
      [TASK.WARNING]: tw`bg-yellow-500`[variant],
    },
  },
};

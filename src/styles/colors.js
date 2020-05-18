import {
  pipelineStatuses as PIPELINE,
  pipelineTypes as PIPELINE_TYPE,
  taskStatuses as TASK,
} from '@hkube/consts';
import tw from 'twin.macro';

const variant = `color`;

const toVariant = isLightTheme => (lightProp, darkProp) =>
  (isLightTheme ? lightProp : darkProp)[variant];

const toLightColors = (isLightTheme = true) => {
  const toColor = toVariant(isLightTheme);
  return {
    pipeline: {
      type: {
        [PIPELINE_TYPE.ALGORITHM]: toColor(tw`text-orange-700`, tw`text-orange-500`),
        [PIPELINE_TYPE.CRON]: toColor(tw`text-indigo-700`, tw`text-indigo-500`),
        [PIPELINE_TYPE.INTERNAL]: toColor(tw`text-pink-700`, tw`text-pink-500`),
        [PIPELINE_TYPE.NODE]: toColor(tw`text-green-700`, tw`text-green-500`),
        [PIPELINE_TYPE.RAW]: toColor(tw`text-red-700`, tw`text-red-500`),
        [PIPELINE_TYPE.STORED]: toColor(tw`text-blue-700`, tw`text-blue-500`),
        [PIPELINE_TYPE.SUB_PIPELINE]: toColor(tw`text-purple-700`, tw`text-purple-500`),
        [PIPELINE_TYPE.TENSORBOARD]: toColor(tw`text-yellow-700`, tw`text-yellow-500`),
        [PIPELINE_TYPE.TRIGGER]: toColor(tw`text-teal-700`, tw`text-teal-500`),
      },
      status: {
        [PIPELINE.ACTIVE]: toColor(tw`text-blue-400`, tw`text-blue-700`),
        [PIPELINE.COMPLETED]: toColor(tw`text-green-400`, tw`text-green-700`),
        [PIPELINE.CRASHED]: toColor(tw`text-teal-400`, tw`text-teal-700`),
        [PIPELINE.STOPPED]: toColor(tw`text-orange-400`, tw`text-orange-700`),
        [PIPELINE.FAILED]: toColor(tw`text-red-400`, tw`text-red-700`),
        [PIPELINE.PAUSED]: toColor(tw`text-yellow-400`, tw`text-yellow-700`),
        [PIPELINE.PENDING]: toColor(tw`text-gray-400`, tw`text-gray-700`),
        [PIPELINE.RESUMED]: toColor(tw`text-indigo-400`, tw`text-indigo-700`),
        [PIPELINE.RUNNING]: toColor(tw`text-blue-400`, tw`text-blue-700`),
        [PIPELINE.STALLED]: toColor(tw`text-purple-400`, tw`text-purple-700`),
      },
      priority: {
        1: tw`text-red-700`[variant],
        2: tw`text-orange-700`[variant],
        3: tw`text-orange-500`[variant],
        4: tw`text-yellow-400`[variant],
        5: tw`text-green-500`[variant],
      },
    },
    task: {
      status: {
        [TASK.ACTIVE]: tw`text-blue-500`[variant],
        [TASK.COMPLETED]: tw`text-green-500`[variant],
        [TASK.CRASHED]: tw`text-gray-500`[variant],
        [TASK.CREATING]: tw`text-green-400`[variant],
        [TASK.FAILED]: tw`text-red-500`[variant],
        [TASK.PENDING]: tw`text-gray-400`[variant],
        [TASK.PRESCHEDULE]: tw`text-pink-500`[variant],
        [TASK.SKIPPED]: tw`text-indigo-500`[variant],
        [TASK.STALLED]: tw`text-purple-500`[variant],
        [TASK.STORING]: tw`text-yellow-300`[variant],
        [TASK.SUCCEED]: tw`text-green-600`[variant],
        [TASK.WARNING]: tw`text-yellow-500`[variant],
      },
      batch: toColor(tw`text-orange-400`, tw`text-orange-700`),
    },
  };
};

export const COLORS = toLightColors();
export const COLORS_DARK = toLightColors(false);

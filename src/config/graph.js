import { GRAPH } from '@constants';
import tw from 'twin.macro';

const { direction: DIRECTION, defaultOptions, types } = GRAPH;

const { BATCH } = types;

// https://visjs.github.io/vis-network/docs/network/

const options = ({
  hierarchical = defaultOptions.hierarchical,
  visible = defaultOptions.visible,
  direction = DIRECTION.LR,
} = defaultOptions) => ({
  autoResize: true,
  layout: {
    hierarchical: {
      enabled: hierarchical,
      direction,
      nodeSpacing: 200,
      sortMethod: `directed`,
      levelSeparation: 200,
    },
  },
  nodes: {
    shape: `box`,
    size: 50,
    font: {
      size: 20,
      color: `white`,
    },
    margin: 10,
    color: {
      border: `transparent`,
      hover: {
        background: tw`bg-gray-500`.backgroundColor,
        border: `transparent`,
      },
      highlight: {
        border: tw`bg-gray-800`.backgroundColor,
        background: tw`bg-gray-500`.backgroundColor,
      },
    },
  },
  edges: {
    scaling: {
      min: 1,
      max: 15,
      label: {
        enabled: true,
      },
    },
    width: 2,
    hidden: !visible,
    smooth: {
      enabled: false,
      type: `cubicBezier`,
    },
  },
  interaction: {
    dragNodes: true,
    dragView: true,
    navigationButtons: false,
    multiselect: true,
    hover: true,
    tooltipDelay: 100,
    selectable: true,
  },
  physics: {
    enabled: false,
  },
  groups: {
    [BATCH.COMPLETED]: {
      color: {
        background: tw`bg-green-800`.backgroundColor,
      },
    },
    [BATCH.RUNNING]: {
      color: {
        background: tw`bg-blue-800`.backgroundColor,
      },
    },
    [BATCH.ERRORS]: {
      color: {
        background: tw`bg-blue-800`.backgroundColor,
      },
    },
    [BATCH.NOT_STARTED]: {
      color: {
        background: tw`bg-blue-800`.backgroundColor,
      },
    },
  },
});

export default options;

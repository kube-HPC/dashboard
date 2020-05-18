import { GRAPH } from '@constants';

const { direction: DIRECTION, defaultOptions, types } = GRAPH;

const { BATCH } = types;

// https://visjs.github.io/vis-network/docs/network/

// https://nerdcave.com/tailwind-cheat-sheet
// text-gray-500: #a0aec0
// bg-green-800

const textGray500 = `#a0aec0`;
const textGray800 = `#2d3748`;
const textBlue800 = `#2c5282`;
const textGreen800 = `#276749`;

// TODO: Insert graph colors to theme
const options = ({
  hierarchical = defaultOptions.hierarchical,
  visible = defaultOptions.visible,
  direction = DIRECTION.LR,
  isLightTheme = defaultOptions.isLightTheme,
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
        background: textGray500,
        border: `transparent`,
      },
      highlight: {
        border: textGray800,
        background: textGray500,
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
      enabled: true,
      type: `cubicBezier`,
    },
    color: isLightTheme ? `black` : textGray500,
  },
  interaction: {
    dragNodes: true,
    dragView: true,
    navigationButtons: false,
    multiselect: false,
    hover: true,
    tooltipDelay: 0,
    selectable: true,
  },
  physics: {
    enabled: false,
  },
  groups: {
    [BATCH.COMPLETED]: {
      color: {
        background: textGreen800,
      },
    },
    [BATCH.RUNNING]: {
      color: {
        background: textBlue800,
      },
    },
    [BATCH.ERRORS]: {
      color: {
        background: textBlue800,
      },
    },
    [BATCH.NOT_STARTED]: {
      color: {
        background: textBlue800,
      },
    },
  },
});

export default options;

import { GRAPH } from '@constants';

const { direction: DIRECTION, defaultOptions } = GRAPH;

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
    },
    margin: 10,
    shadow: true,
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
    useDefaultGroups: true,
  },
});

export default options;

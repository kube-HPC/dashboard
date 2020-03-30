import { GRAPH } from '@constants';

const { direction: DIRECTION, defaultOptions } = GRAPH;

const options = ({
  hierarchical = defaultOptions.hierarchical,
  visible = defaultOptions.visible,
  physics = defaultOptions.physics,
  direction = DIRECTION.LR,
} = defaultOptions) => ({
  autoResize: true,
  layout: {
    hierarchical: {
      enabled: hierarchical,
      direction,
      nodeSpacing: 200,
      sortMethod: `directed`,
    },
  },
  nodes: {
    // color: PALETTE.PRIMARY,
    shape: `box`,
    size: 50,
    font: {
      size: 20,
    },
    margin: 10,
    mass: 1,
    title: `title`,
    shadow: true,
  },
  edges: {
    length: 500,
    width: 2,
    hidden: !visible,
    smooth: {
      enabled: false,
      type: `cubicBezier`,
    },
  },
  configure: {
    enabled: false,
  },
  interaction: {
    dragNodes: true,
    dragView: true,
    navigationButtons: false,
    multiselect: true,
    hover: true,
    tooltipDelay: 1,
  },
  clickToUse: true,
  physics: {
    enabled: physics,
    barnesHut: {
      avoidOverlap: physics ? 0 : 0.5,
    },
    solver: hierarchical ? `hierarchicalRepulsion` : `barnesHut`,
  },
});

export default options;

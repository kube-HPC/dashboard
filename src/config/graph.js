import { GRAPH } from '@constants';

const { direction: DIRECTION, defaultOptions } = GRAPH;

const options = ({
  height = `${window.innerHeight}px`,
  hierarchical = true,
  visible = true,
  physics = false,
  direction = DIRECTION.LR,
} = defaultOptions) => ({
  height,
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
  },
  edges: {
    color: `black`,
    length: 500,
    width: 2,
    hidden: !visible,
    smooth: {
      enabled: false,
    },
  },
  autoResize: false,
  configure: {
    enabled: false,
  },
  interaction: {
    dragNodes: true,
    dragView: true,
    navigationButtons: false,
    multiselect: true,
    hover: true,
    tooltipDelay: 2,
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

import {GRAPH, RAW, SB_LABELS} from '@constants';
import React from 'react';
import Graph from './Graph.react';

export const Default = () => <Graph graph={RAW.graph} />;
export const upDown = () => <Graph graph={RAW.graph} options={{direction: GRAPH.direction.UD}} />;

export default {
  title: `${SB_LABELS.ATOMS}${Graph.displayName}`,
  component: Graph,
};

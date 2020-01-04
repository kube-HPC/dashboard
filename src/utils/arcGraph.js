import { STORE } from '@constants';

export const toCoordinatesArray = ({ latitude, longitude }) => [longitude, latitude].map(Number);

export const extractCoordinates = type => ({ [type]: { latitude, longitude } }) =>
  toCoordinatesArray({ latitude, longitude });

const extractData = ({ isSource = true, object }) => object[isSource ? 'startNode' : 'stopNode'];

export const getCursor = () => 'crosshair';

export const setOnHover = action => ({ object: data, x, y }) => action({ data, x, y });
export const setOnHoverNode = action => ({ isSource = true }) => ({ object: data, x, y }) =>
  action({ isSource, data, x, y });

const find = target => ({ id }) => id === target;
const remove = target => ({ id }) => id !== target;

const { SELECTED_NODES } = STORE;

export const setOnClickNode = action => ({ isSource = true }) => ({ object }) =>
  action(controller => {
    const node = extractData({ isSource, object });
    const { id: target } = node;
    const { [SELECTED_NODES]: selected } = controller;

    const isSelected = selected.find(find(target));
    const removed = selected.filter(remove(target));
    const added = [...selected, node];

    return {
      ...controller,
      [SELECTED_NODES]: isSelected ? removed : added,
    };
  });

export default {
  toCoordinatesArray,
  setOnClickNode,
  setOnHover,
  setOnHoverNode,
  extractCoordinates,
  getCursor,
};

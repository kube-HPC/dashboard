import { STORE } from '@constants';
import { toBoolean } from './string';

const {
  LIMIT,
  PATH_LENGTH,
  IS_EDGE_VISIBLE,
  IS_HIERARCHICAL_VIEW,
  IS_PATH_CALCULATION,
  IS_TOP_NODES,
  TOP_NODES,
} = STORE;

const NUMBERS = [LIMIT, PATH_LENGTH, TOP_NODES];
const BOOLEANS = [IS_HIERARCHICAL_VIEW, IS_EDGE_VISIBLE, IS_PATH_CALCULATION, IS_TOP_NODES];

const formToController = form => {
  const mapped = Object.entries(form).map(([key, value]) => [
    key,
    NUMBERS.includes(key) ? Number(value) : BOOLEANS.includes(value) ? toBoolean(value) : value,
  ]);

  return Object.fromEntries(mapped);
};

export default formToController;

import throttle from 'lodash.throttle';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';

const ITEM_SIZE_PX = 100;
const DELAY_MS = 500;

const onScroll = setIndexes => e => {
  const totalItems = Math.ceil(e.clientHeight / ITEM_SIZE_PX);
  const lowerIndex = Math.ceil(e.scrollTop / ITEM_SIZE_PX);
  const topIndex = lowerIndex + totalItems;
  setIndexes([lowerIndex, topIndex + 2]);
};

const useScroll = () => {
  const {
    scroll: { setIndexes },
  } = useActions();

  const onScrollFrame = useCallback(throttle(onScroll(setIndexes), DELAY_MS), []);
  const { indexes } = useSelector(state => state.scroll);

  return { setIndexes, indexes, onScrollFrame };
};

export default createStore(useScroll);

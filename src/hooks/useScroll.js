import { SCROLL } from '@config';
import throttle from 'lodash.throttle';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';

const { deltaBottom, deltaTop, itemSize, throttleDelay } = SCROLL;

const onScroll = setIndexes => ({ clientHeight, scrollTop }) => {
  const totalItems = Math.ceil(clientHeight / itemSize);
  const lowerIndex = Math.ceil(scrollTop / itemSize);
  const topIndex = lowerIndex + totalItems;
  setIndexes([lowerIndex - deltaBottom, topIndex + deltaTop]);
};

const useScroll = () => {
  const {
    scroll: { setIndexes },
  } = useActions();

  const onScrollFrame = useCallback(throttle(onScroll(setIndexes), throttleDelay), []);
  const { indexes } = useSelector(state => state.scroll);

  return { setIndexes, indexes, onScrollFrame };
};

export default createStore(useScroll);

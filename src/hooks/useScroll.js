import { SCROLL } from '@config';
import throttle from 'lodash.throttle';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const { deltaBottom, deltaTop, itemSize, throttleDelay } = SCROLL;

const isItemInRange = ([left, right]) => index => left <= index && index <= right;

const onScroll = ({ setIndexes, itemHeight = itemSize }) => ({ clientHeight, scrollTop }) => {
  const totalItems = Math.ceil(clientHeight / itemHeight);
  const lowerIndex = Math.ceil(scrollTop / itemHeight);
  const topIndex = lowerIndex + totalItems;
  setIndexes([lowerIndex, topIndex]);
};

const offsetY = ({ indexes: [left], itemHeight }) => (left <= 0 ? 0 : left * itemHeight);

const DEFAULT = { itemHeight: itemSize };

const useScroll = ({ itemHeight = itemSize } = DEFAULT) => {
  const {
    scroll: { setIndexes },
  } = useActions();

  const onScrollFrame = useCallback(
    throttle(onScroll({ setIndexes, itemHeight }), throttleDelay),
    [],
  );
  const { indexes } = useSelector(state => state.scroll);

  return {
    setIndexes,
    indexes,
    onScrollFrame,
    isItemInRange: isItemInRange(indexes),
    offsetY: offsetY({ indexes, itemHeight }),
  };
};

export default useScroll;

import { counterSlice } from '@slices';
import { useSelector } from 'react-redux';
import useAction from './useAction';

const { decrement, increment } = counterSlice.actions;

const useCounter = () => {
  const counter = useSelector(state => state.counter);
  const increase = useAction(increment);
  const decrease = useAction(decrement);

  return { counter, increase: () => increase(), decrease: () => decrease() };
};

export default useCounter;

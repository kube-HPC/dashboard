import { decrement, increment } from '@slices/counter.slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const count = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const onClick = () => dispatch(increment());
  const onClick2 = () => dispatch(decrement());

  return (
    <>
      {count}
      <div>
        <button onClick={onClick}>Increase</button>
      </div>
      <div>
        <button onClick={onClick2}>Decrease</button>
      </div>
    </>
  );
};

export default Dashboard;

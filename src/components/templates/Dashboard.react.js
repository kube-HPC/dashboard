import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from '../../state/createStore';

const { actions } = counterSlice;
const { increment } = actions;

const Dashboard = () => {
  const count = useSelector(state => state);

  const dispatch = useDispatch();

  const onClick = () => dispatch(increment());

  return (
    <div>
      {count}
      <button onClick={onClick}>Increase</button>
    </div>
  );
};

export default Dashboard;

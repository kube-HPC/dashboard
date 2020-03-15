import { useCounter, useSocket } from '@hooks';
import React from 'react';

const Dashboard = () => {
  const { counter, decrease, increase } = useCounter();
  const {} = useSocket();

  return (
    <>
      {counter}
      <div>
        <button onClick={increase}>Increase</button>
      </div>
      <div>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
};

export default Dashboard;

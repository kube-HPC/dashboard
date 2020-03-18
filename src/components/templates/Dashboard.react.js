import { Sidebar } from '@components';
import { useSocket } from '@hooks';
import { GlobalStyle } from '@styles';
import React from 'react';

const Dashboard = () => {
  useSocket();

  return (
    <>
      <GlobalStyle />
      <Sidebar />
    </>
  );
};

export default Dashboard;

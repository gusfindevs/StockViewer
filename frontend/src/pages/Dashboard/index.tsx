import React from 'react';

import StocksSearchBox from '../../components/StocksSearchBox';

const Dashboard: React.FC = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <StocksSearchBox />
      <StocksSearchBox />
      <StocksSearchBox />
    </>
  );
};

export default Dashboard;

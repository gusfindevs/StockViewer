import React from 'react';

import { Container } from './styles';

import StocksSearchBox from '../../components/StocksSearchBox';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <StocksSearchBox />
      <StocksSearchBox />
      <StocksSearchBox />
    </Container>
  );
};

export default Dashboard;

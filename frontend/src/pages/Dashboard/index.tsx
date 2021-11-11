import React from 'react';

import { Container } from './styles';

import StocksSearchBox from '../../components/StocksSearchBox';
import ChartBox from '../../components/ChartBox';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <StocksSearchBox />
      <ChartBox />
    </Container>
  );
};

export default Dashboard;

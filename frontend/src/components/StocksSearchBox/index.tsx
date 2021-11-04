import React from 'react';

import { Container, CardHeader, CardBody } from './styles';

import Search from '../Search';
import DateSelector from '../DateSelector';

const StocksSearchBox: React.FC = () => {
  return (
    <Container>
      <CardHeader>
        <h2>Stock Search Header</h2>
      </CardHeader>
      <CardBody>
        <Search />
        <DateSelector />
      </CardBody>
    </Container>
  );
};

export default StocksSearchBox;

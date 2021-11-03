import React from 'react';

import { Container, CardHeader, CardBody } from './styles';

const StocksSearchBox: React.FC = () => {
  return (
    <Container>
      <CardHeader>
        <h2>Stock Search Header</h2>
      </CardHeader>
      <CardBody>
        <h3>Stock Search Body</h3>
      </CardBody>
    </Container>
  );
};

export default StocksSearchBox;

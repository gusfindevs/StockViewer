import React, { useCallback } from 'react';

import { Container, CardHeader, CardBody } from './styles';

import Search from '../Search';
import DateSelector from '../DateSelector';

import { useDailyData } from '../../hooks/useDailyData';

const StocksSearchBox: React.FC = () => {
  const { quotes, getDailyQuotes } = useDailyData('ABEO', '2021-06-17');

  const callApi = useCallback(async () => {
    await getDailyQuotes();
  }, [getDailyQuotes]);

  return (
    <Container>
      <CardHeader>
        <h2>Stock Search Header</h2>
      </CardHeader>
      <CardBody>
        <Search />
        <DateSelector />
        <button onClick={() => callApi()}>Chama API</button>
      </CardBody>
    </Container>
  );
};

export default StocksSearchBox;

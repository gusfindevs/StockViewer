import React from 'react';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import { Container } from './styles';

require('highcharts/indicators/indicators')(Highcharts);
require('highcharts/indicators/pivot-points')(Highcharts);
require('highcharts/indicators/macd')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);

interface IStockChartProps {
  options: Highcharts.Options;
  highcharts: any;
}

const StockChart: React.FC<IStockChartProps> = ({ options, highcharts }) => {
  return (
    <Container>
      <HighchartsReact
        highcharts={highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </Container>
  );
};

export default StockChart;

import React from 'react';
import {
  Chart, BarSeries, Title, ArgumentAxis, ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

export default (props) => {
  const { chartHeight, chartData, chartTitle } = props;

  return (
    <Chart
      height={chartHeight}
      data={chartData || []}
    >
      <ArgumentAxis />
      <ValueAxis />
      <BarSeries valueField="num" argumentField="name" />
      <Title text={chartTitle} />
      <Animation />
    </Chart>
  );
};

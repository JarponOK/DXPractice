import React from 'react';
import {
  Chart, BarSeries, Title, ArgumentAxis, ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

export default (props) => {
  // eslint-disable-next-line react/prop-types
  const { chartHeight, chartData, chartTitle } = props;

  return (
    <Chart
      // eslint-disable-next-line react/destructuring-assignment
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

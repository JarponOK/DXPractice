import React from 'react';
import { scalePoint } from 'd3-scale';
import { curveCatmullRom, line } from 'd3-shape';
import {
  Chart, ArgumentAxis, ValueAxis, LineSeries, Title
} from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';

const Spline = props => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

export default (props) => {
  // eslint-disable-next-line react/prop-types
  const { chartHeight, chartData, chartTitle } = props;

  return (
    <Chart
      height={chartHeight}
      data={chartData || []}
    >
      {/* TODO */}
      <ArgumentScale factory={scalePoint} />
      <ArgumentAxis />
      <ValueAxis />
      <LineSeries valueField="num" argumentField="name" seriesComponent={Spline} />
      <Title text={chartTitle} />
      <Animation />
    </Chart>
  );
};

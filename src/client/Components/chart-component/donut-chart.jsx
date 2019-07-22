import React from 'react';
import { Animation, Palette } from '@devexpress/dx-react-chart';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';

const schemeColors = {
  junior: [
    '#00c078',
    '#DCDCDC'
  ],
  middle: [
    '#4d76cf',
    '#DCDCDC'
  ],
  senior: [
    '#ffac00',
    '#DCDCDC'
  ]
};

export default (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    chartHeight, chartData, chartTitle
  } = props;

  return (
    <Chart
      data={chartData || []}
      height={chartHeight}
    >
      <Palette scheme={schemeColors.junior} />
      <PieSeries
        valueField="val"
        argumentField="age"
        innerRadius={0.7}
      />
      <Title
        text={chartTitle}
        position="bottom"
      />
      <Animation />
    </Chart>
  );
}

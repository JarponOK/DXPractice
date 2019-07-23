import React from 'react';
import { Animation, Palette } from '@devexpress/dx-react-chart';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';

export default (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    height, data, title, color,
  } = props;

  return (
    <Chart
      data={data || []}
      height={height}
    >
      <Palette scheme={color} />
      <PieSeries
        valueField="val"
        argumentField="age"
        innerRadius={0.7}
      />
      <Title
        text={title}
        position="bottom"
      />
      <Animation />
    </Chart>
  );
};

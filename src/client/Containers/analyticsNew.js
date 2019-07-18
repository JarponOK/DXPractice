import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Chart, ArgumentAxis, ValueAxis, LineSeries, Title, Legend, } from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import Typography from '@material-ui/core/Typography';
import { scalePoint } from 'd3-scale';
import { curveCatmullRom, line } from 'd3-shape';
import { analyticsNewFetchData } from '../Actions/itemAnalytics';
import { URL_ANALYTICS_NEW } from './const';

const Line = props => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

class AnalyticsNew extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_NEW);
  }

  render() {
    const { hasErrored, isLoading } = this.props;
    if (hasErrored) {
      return <Typography>Sorry! There was an error loading the items</Typography>;
    }

    if (isLoading) {
      return <Typography>Loading…</Typography>;
    }

    if (!isLoading && !hasErrored) {
      // eslint-disable-next-line react/destructuring-assignment
      const chartData = this.props.items;
      this.setState(chartData);

      // console.log(chartData);
      return (
        <Chart data={chartData}>
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="Patient"
            valueField="name"
            argumentField="num"
            color="#00F"
            seriesComponent={Line}
          />
          {/* <Legend position="bottom" /> */}
          <Title text="New patient" />
          <Animation />
        </Chart>
      );
    }

  }
}

AnalyticsNew.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsAnalytics.itemsAnalyticsNew,
  hasErrored: state.itemsAnalytics.hasErrored,
  isLoading: state.itemsAnalytics.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(analyticsNewFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsNew);

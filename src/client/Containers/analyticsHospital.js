import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Chart, ArgumentAxis, ValueAxis, LineSeries, Title, Legend, } from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { scalePoint } from 'd3-scale';
import { curveCatmullRom, line } from 'd3-shape';
import { analyticsHospitalFetchData } from '../Actions/itemAnalytics';
import { URL_ANALYTICS_HOSPITAL } from './const';

const Spline = props => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

class AnalyticsHospital extends Component {
  constructor(props) {
    super(props);

    this.rootElement = React.createRef();

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_HOSPITAL);

    const height = this.rootElement.current.clientHeight - 20;
    this.setState({ height });
  }

  render() {
    const { hasErrored, isLoading, classes } = this.props;

    if (hasErrored) {
      return (
        <Paper className={classes.centerBoard}>
          <Typography>Sorry! There was an error loading the items</Typography>
        </Paper>
      );
    }

    if (isLoading) {
      return (
        <Paper className={classes.centerBoard}>
          <Typography>Loading…</Typography>
        </Paper>
      );
    }

    // eslint-disable-next-line react/prop-types
    const { items } = this.props;
    return (
      // eslint-disable-next-line react/prop-types
      <Paper className={classes.centerBoard} ref={this.rootElement}>
        <Chart
          // eslint-disable-next-line react/destructuring-assignment
          height={this.state.height}
          data={items || []}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />
          <LineSeries valueField="num" argumentField="name" seriesComponent={Spline} />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

const useStyles = theme => ({
  centerBoard: {
    height: '25vh',
    color: theme.palette.text.secondary,
  },
});

const AnalyticsHospitals = withStyles(useStyles)(AnalyticsHospital);

AnalyticsHospital.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsAnalytics.itemsAnalyticsHospital,
  hasErrored: state.itemsAnalytics.hasErrored,
  isLoading: state.itemsAnalytics.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(analyticsHospitalFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsHospitals);

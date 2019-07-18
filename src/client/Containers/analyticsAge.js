import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
import { analyticsAgeFetchData } from '../Actions/itemAnalytics';
import { URL_ANALYTICS_AGE } from './const';

class AnalyticsAge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_AGE);

    const height = this.paperElement.clientHeight - 20;
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
        // eslint-disable-next-line no-return-assign
        <Paper className={classes.centerBoard}>
          <Typography>Loading…</Typography>
        </Paper>
      );
    }

    // eslint-disable-next-line react/prop-types
    const { items } = this.props;

    let dataChart;
    if (items) { /* eslint-disable */
      dataChart = [
        { age: 'Junior', val: items.ageJunior },
        { age: 'Middle', val: items.ageMiddle },
        { age: 'Senior', val: items.ageSenior }
      ];
    }

    return (
      // eslint-disable-next-line no-return-assign
      <Paper className={classes.centerBoard} ref={paperElement => this.paperElement = paperElement}>
        <Chart
          data={dataChart || []}
        >
          <PieSeries />
          <Animation />
          <PieSeries
            valueField="val"
            argumentField="age"
            innerRadius={0.6}
          />
        </Chart>
      </Paper>
    );
  }
}

const useStyles = theme => ({
  centerBoard: {
    height: '56.5vh',
    color: theme.palette.text.secondary,
  },
});

const AnalyticsAges = withStyles(useStyles)(AnalyticsAge);

AnalyticsAge.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsAnalytics.itemsAnalyticsAge,
  hasErrored: state.itemsAnalytics.hasErrored,
  isLoading: state.itemsAnalytics.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(analyticsAgeFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsAges);

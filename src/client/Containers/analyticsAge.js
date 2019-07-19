import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography, Paper, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
import { analyticsAgeFetchData } from '../Actions/itemAnalytics';
import { URL_ANALYTICS_AGE } from './const';
import Loading from '../Components/loading-indicator';

/* eslint-disable react/prop-types */
class AnalyticsAge extends Component {
  constructor(props) {
    super(props);

    this.rootElement = React.createRef();

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_AGE);

    const height = (this.rootElement.current.clientHeight - 20) / 4;
    this.setState({ height });
  }

  render() {
    const { hasErrored, isLoading, classes } = this.props;

    const { items } = this.props;
    const { height } = this.state;

    let chartJunior = [];
    let chartMiddle = [];
    let chartSenior = [];

    if (items.length > 0) {
      chartJunior = [
        { age: 'Junior', val: items[0].ageJunior },
        { age: 'Other', val: items[0].ageMiddle + items[0].ageSenior }
      ];
      chartMiddle = [
        { age: 'Middle', val: items[0].ageMiddle },
        { age: 'Other', val: items[0].ageJunior + items[0].ageSenior }
      ];
      chartSenior = [
        { age: 'Senior', val: items[0].ageSenior },
        { age: 'Other', val: items[0].ageMiddle + items[0].ageJunior }
      ];
    }

    return (
      <Paper className={classes.centerBoard} ref={this.rootElement}>
        {isLoading && <Loading />}
        {hasErrored && <Typography>Sorry! There was an error loading the items</Typography>}
        <Typography>Age of Patient</Typography>
        <Chart
          data={chartJunior || []}
          height={height}
        >
          <PieSeries
            valueField="val"
            argumentField="age"
            innerRadius={0.6}
          />
          <Animation />
          <Title
            text="0-22 oy"
            position="bottom"
          />
        </Chart>
        <Chart
          data={chartMiddle || []}
          height={height}
        >
          <PieSeries
            valueField="val"
            argumentField="age"
            innerRadius={0.6}
          />
          <Animation />
          <Title
            text="22-45 oy"
            position="bottom"
          />
        </Chart>
        <Chart
          data={chartSenior || []}
          height={height}
        >
          <PieSeries
            valueField="val"
            argumentField="age"
            innerRadius={0.6}
          />
          <Title
            text="45 + oy"
            position="bottom"
          />
          <Animation />
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

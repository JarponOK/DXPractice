import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography, Paper, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { analyticsAgeFetchData } from '../../actions/item-analytics';
import { URL_ANALYTICS_AGE } from '../const';
import Loading from '../loading-indicator';
import Error from '../error-indicator';
import Chart from '../chart-component/donut-chart';

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

/* eslint-disable react/prop-types */
class AnalyticsAge extends Component {
  constructor(props) {
    super(props);

    this.rootElement = React.createRef();
    this.chartElement = React.createRef();

    this.state = {
      heightChart: 0,
    };
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_AGE);

    const heightChart = (this.rootElement.current.clientHeight) / 4;
    this.setState({ heightChart });
  }

  componentDidUpdate() {
    this.state.heightChart = (this.rootElement.current.clientHeight) / 4;
  }

  render() {
    const {
      hasErrored, isLoading, classes, items
    } = this.props;

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

    const { heightChart } = this.state;
    return (
      <Paper className={classes.root} ref={this.rootElement}>
        {isLoading && <Loading />}
        {hasErrored && <Error />}
        {!isLoading && (
          <Grid container direction="column" justify="center">
            <Typography>Age of Patient</Typography>
            <Chart
              height={heightChart}
              data={chartJunior}
              title="0-22 oy"
              color={schemeColors.junior}
            />
            <Chart
              height={heightChart}
              data={chartMiddle}
              title="22-45 oy"
              color={schemeColors.middle}
            />
            <Chart
              height={heightChart}
              data={chartSenior}
              title="45+ oy"
              color={schemeColors.senior}
            />
          </Grid>
        )}
      </Paper>
    );
  }
}

const useStyles = theme => ({
  root: {
    height: '56vh',
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

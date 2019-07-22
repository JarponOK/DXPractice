import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis, } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { withStyles } from '@material-ui/core/styles';
import { analyticsVisitFetchData } from '../actions/item-analytics';
import { URL_ANALYTICS_VISIT } from './const';
import Loading from './loading-indicator';
import Error from './error-indicator';

class AnalyticsVisit extends Component {
  constructor(props) {
    super(props);

    this.rootElement = React.createRef();

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_VISIT);

    const height = this.rootElement.current.clientHeight - 20;
    this.setState({ height });
  }

  render() {
    const { hasErrored, isLoading, classes } = this.props;

    // eslint-disable-next-line react/prop-types
    const { items } = this.props;
    return (
      <Paper className={classes.centerBoard} ref={this.rootElement}>
        {isLoading && <Loading />}
        {hasErrored && <Error />}
        <Chart
          // eslint-disable-next-line react/destructuring-assignment
          height={this.state.height}
          data={items || []}
        >
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries valueField="num" argumentField="name" />
          <Title text="Visit patient" />
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

const AnalyticsVisits = withStyles(useStyles)(AnalyticsVisit);

AnalyticsVisit.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsAnalytics.itemsAnalyticsVisit,
  hasErrored: state.itemsAnalytics.hasErrored,
  isLoading: state.itemsAnalytics.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(analyticsVisitFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsVisits);

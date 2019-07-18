import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Animation } from '@devexpress/dx-react-chart';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
import { analyticsAgeFetchData } from '../Actions/itemAnalytics';
import { URL_ANALYTICS_AGE } from './const';

class AnalyticsAge extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_AGE);
  }

  render() {
    const { hasErrored, isLoading } = this.props;
    if (hasErrored) {
      return <Typography>Sorry! There was an error loading the items</Typography>;
    }

    if (isLoading) {
      return <Typography>Loading…</Typography>;
    }

    return <Typography>Loading is complete</Typography>;
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsAge);

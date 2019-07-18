import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { analyticsHospitalFetchData } from '../Actions/itemAnalytics';
import { URL_ANALYTICS_HOSPITAL } from './const';

class AnalyticsHospital extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_ANALYTICS_HOSPITAL);
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

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsHospital);

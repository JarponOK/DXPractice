import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { analyticsVisitFetchData } from '../Actions/itemAnalytics';
import { urlAnalyticsVisit } from './const';

class AnalyticsVisit extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(urlAnalyticsVisit);
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

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsVisit);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { analyticsNewFetchData } from '../actions/itemAnalytics';
import { urlAnalyticsTotal } from './const';

class AnalyticsTotal extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(urlAnalyticsTotal);
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

AnalyticsTotal.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsAnalytics.itemsAnalyticsTotal,
  hasErrored: state.itemsAnalytics.hasErrored,
  isLoading: state.itemsAnalytics.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(analyticsNewFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsTotal);

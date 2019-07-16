import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { analyticsAgeFetchData } from '../actions/itemAnalytics';
import { urlAnalyticsAge } from './const';

class AnalyticsAge extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData( urlAnalyticsAge );
  }

  render() {
    const { hasErrored, isLoading } = this.props;
    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
      return <p>Loading…</p>;
    }

    return <p>Loading is complete</p>;
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

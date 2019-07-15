import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { analyticsAgeFetchData } from '../actions/itemAnalytics';

class AnalyticsAge extends Component {
  componentDidMount() {
    this.props.fetchData('http://localhost:8080/api/analytics/age');
  }

  render() {
    const { hasErrored, isLoading } = this.props;
    console.log(isLoading);
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
  items: state.itemsAnalytics.itemsAnalytics,
  hasErrored: state.itemsAnalytics.hasErrored,
  isLoading: state.itemsAnalytics.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(analyticsAgeFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsAge);

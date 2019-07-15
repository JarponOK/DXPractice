import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { analyticsNewFetchData } from '../actions/itemAnalytics';

class AnalyticsNew extends Component {
  componentDidMount() {
    this.props.fetchData('http://localhost:8080/api/analytics/new/years');
  }

  render() {
    const { hasErrored, isLoading } = this.props;
    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
      console.log('awedawd');
      return <p>Loading…</p>;
    }
    return <p>Loading is complete</p>;
  }
}

AnalyticsNew.propTypes = {
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
  fetchData: url => dispatch(analyticsNewFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsNew);

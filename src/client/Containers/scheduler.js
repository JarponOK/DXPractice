import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { schedulerFetchData } from '../Actions/itemScheduler';

class SchedulerPage extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData('http://localhost:8080/api/scheduler/2019-07-03T00:00:00.000+00:00&2019-07-07T00:00:00.000+00:00');
  }

  render() {
    console.log(this.props);
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

SchedulerPage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  items: state.itemsScheduler.itemsScheduler,
  hasErrored: state.itemsScheduler.hasErrored,
  isLoading: state.itemsScheduler.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(schedulerFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerPage);

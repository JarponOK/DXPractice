import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { schedulerFetchData } from '../Actions/itemScheduler';
import { urlScheduler } from './const';

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'left',
    fontSize: 18,
    color: theme.palette.text.secondary,
  }
}));


function TopMenu() {
  const classes = useStyles();

  return (
    <Grid item xs={12} style={{ marginBottom: '25px', paddingLeft: '25px' }}>
      <Typography className={classes.header}>Scheduler</Typography>
    </Grid>
  );
}

class SchedulerPage extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(urlScheduler);
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

    return (<TopMenu />);
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

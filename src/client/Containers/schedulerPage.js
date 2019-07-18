import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler, WeekView, Appointments
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { schedulerFetchData } from '../Actions/itemScheduler';
import { URL_SCHEDULER } from './const';

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'left',
    fontSize: 18,
    color: theme.palette.text.secondary,
  }
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.header}>Scheduler</Typography>
  );
};

class SchedulerPage extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_SCHEDULER);
  }

  render() {
    const { items } = this.props;
    const startDate = '2019-07-03';
    console.log(items);
    const { hasErrored, isLoading } = this.props;
    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <Grid item xs={12} style={{ marginBottom: '25px', paddingLeft: '25px' }}>
        <TopMenu />
        <Scheduler data={items}>
          <ViewState
            currentDate={startDate}
          />
          <WeekView
            startDayHour={9}
            endDayHour={18}
          />
          <Appointments />
        </Scheduler>
      </Grid>
    );
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

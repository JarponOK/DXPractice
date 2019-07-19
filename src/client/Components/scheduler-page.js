import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler, WeekView, Appointments, AppointmentTooltip, AppointmentForm, Toolbar, DateNavigator, DragDropProvider
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { schedulerFetchData } from '../actions/item-scheduler';
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
const dragDisableIds = new Set([0, 1, 2, 3]);

const allowDrag = ({ id }) => !dragDisableIds.has(id);
const appointmentComponent = (props) => {
  if (allowDrag(props.data)) {
    console.log(props.data);
    return <Appointments.Appointment {...props} />;
  } return <Appointments.Appointment {...props} style={{ ...props.style, cursor: 'not-allowed' }} />;
};
class SchedulerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: '2019-07-03',
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
    this.commitChanges = (props) => {
      if (props.added) {
        console.log('add');
        console.log({ data });
      }
      if (props.changed) {
        console.log('change')
        console.log(props.data);
      }
      if (props.deleted) {
        console.log('delete')
        console.log({ data });
      }
    };
  }
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(URL_SCHEDULER);
  }


  render() {
    const { items } = this.props;
    console.log(items);
    const newItems = [items.length];
    for (let i = 0; i < items.length; i++) {
      newItems[i] = {};
      newItems[i].id = items[i]._id;
      newItems[i].startDate = items[i].startDate;
      newItems[i].endDate = items[i].endDate;
      newItems[i].title = items[i].name + ' ' + items[i].lastname;
      newItems[i].idClient = items[i].idClient;
      newItems[i].phone = items[i].phone;
    }
    console.log(newItems);

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
        <Scheduler data={newItems}>
          <ViewState
            currentDate={this.currentDate}
            onCurrentDateChange={this.currentDateChange}

          />
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <WeekView
            startDayHour={9}
            endDayHour={18}
          />
          <Appointments appointmentComponent={appointmentComponent} />
          <AppointmentTooltip
            showCloseButton
            showOpenButton
          />
          <AppointmentForm
            readOnly
          />
          <Toolbar />
          <DateNavigator />
          <DragDropProvider
            allowDrag={allowDrag}
          />
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler, WeekView, Appointments, AppointmentTooltip, AppointmentForm, Toolbar, DateNavigator, DragDropProvider, DayView, ViewSwitcher
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { schedulerFetchData, deleteSchedulerData, changeSchedulerData } from '../actions/item-scheduler';
import { URL_SCHEDULER } from './const';
import Header from './header';
import Loading from './loading-indicator';
import Error from './error-indicator';


const dragDisableIds = new Set([0, 1, 2, 3]);

const allowDrag = ({ id }) => !dragDisableIds.has(id);
const appointmentComponent = (props) => {
  if (allowDrag(props.data)) {
    return <Appointments.Appointment {...props} />;
  } return <Appointments.Appointment {...props} style={{ ...props.style, cursor: 'not-allowed' }} />;
};
class SchedulerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: '2019-07-03',
      currentViewName: 'Week',
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };
    this.currentViewNameChange = (currentViewName) => {
      this.setState({ currentViewName });
    };

    this.commitChanges = ({ changed, deleted }) => {
      if (changed) {
        let id = {};
        const { changeData } = props;
        for (const key in changed) {
          id = key;
        }
        const data = { _id: id, startDate: changed[id].startDate, endDate: changed[id].endDate };
        changeData(this.makeQueryString(), data);
        console.log('change');
      }
      if (deleted) {
        const { deleteData } = props;
        deleteData(this.makeQueryString(), { id: deleted });
        console.log('delete');
      }
    };
    this.makeQueryString = () => {
      const { currentDate, currentViewName } = this.state;
      const format = 'YYYY-MM-DDTHH:mm:ss';
      const start = moment(currentDate).startOf(currentViewName.toLowerCase());
      const end = start.clone().endOf(currentViewName.toLowerCase());
      return encodeURI(`${URL_SCHEDULER}${start.format(format)}&${end.format(format)}`);
    };

  }

  componentDidMount = () => {
    const { fetchData } = this.props;
    fetchData(this.makeQueryString());
  }


  render() {
    const { items } = this.props;
    const newItems = [items.length];
    for (let i = 0; i < items.length; i++) {
      newItems[i] = {};
      newItems[i].id = items[i]._id;
      newItems[i].startDate = items[i].startDate;
      newItems[i].endDate = items[i].endDate;
      newItems[i].title = `${items[i].name} ${items[i].lastname} ${items[i].note}`;
      newItems[i].idClient = items[i].idClient;
      newItems[i].phone = items[i].phone;
    }

    const { hasErrored, isLoading } = this.props;

    return (
      <Grid item xs={12} style={{ marginBottom: '25px', paddingLeft: '25px' }}>
        <Header title="Scheduler" />

        <Scheduler data={newItems}>
          <ViewState
            currentDate={this.state.currentDate}
            currentViewName={this.state.currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
            onCurrentDateChange={this.currentDateChange}
          />
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <DayView
            startDayHour={9}
            endDayHour={18}
          />
          <WeekView
            startDayHour={9}
            endDayHour={18}
          />

          <Appointments appointmentComponent={appointmentComponent} />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm />
          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <DragDropProvider
            allowDrag={allowDrag}
          />
        </Scheduler>
        {isLoading && <Loading />}
        {hasErrored && <Error />}
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
  fetchData: url => dispatch(schedulerFetchData(url)),
  deleteData(urlToFetch, dataDelete) {
    dispatch(deleteSchedulerData(URL_SCHEDULER, urlToFetch, dataDelete));
  },
  changeData(urlToFetch, dataChange) { dispatch(changeSchedulerData(URL_SCHEDULER, urlToFetch, dataChange)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerPage);

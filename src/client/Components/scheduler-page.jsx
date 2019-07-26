import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connectProps } from '@devexpress/dx-react-core';
import { withStyles } from '@material-ui/core/styles';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  Toolbar,
  DateNavigator,
  DragDropProvider,
  DayView,
  ViewSwitcher
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  Grid, LinearProgress
} from '@material-ui/core';
import { schedulerFetchData, deleteSchedulerData, changeSchedulerData } from '../actions/item-scheduler';
import { URL_SCHEDULER } from './const';
import Header from './header';
import Error from './error-indicator';
import AppointmentFormContainer from './scheduler-component/appointment-form';
import FlexibleSpace from './scheduler-component/flexible-space';

const priorities = [
  {
    id: 1,
    title: 'Room 1',
    color: '#43a047',
  },
  {
    id: 2,
    title: 'Room 25',
    color: '#039be5',
  },
];

const createClassesByPriorityId = (
  currentRoom,
) => {
  const priorityColor = priorities.find(({ title }) => title === currentRoom).color;
  return { backgroundColor: priorityColor };
};

const styles = theme => ({
  toolbarRoot: {
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
  },

});

const ToolbarWithLoading = withStyles(styles, { name: 'Toolbar' })(
  ({ children, classes, ...restProps }) => (
    <div className={classes.toolbarRoot}>
      <Toolbar.Root {...restProps}>
        {children}
      </Toolbar.Root>
      <LinearProgress className={classes.progress} />
    </div>
  ),
);

const appointmentComponent = withStyles(styles, { name: 'Appointment' })(
  ({ classes, data, ...restProps }) => {
    const priorityClasses = createClassesByPriorityId(
      data.location
    );
    return (
      <Appointments.Appointment
        {...restProps}
        data={data}
        style={priorityClasses}
      />
    );
  },
);

const filterTasks = (items, currentRoom) => {
  if (currentRoom === 'All Rooms') {
    return items;
  }
  return items.filter(task => (
    !currentRoom || task.location === currentRoom
  ));
};
class SchedulerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: '2019-07-03',
      currentViewName: 'Week',
      currentRoom: 'All Rooms',
      startDayHour: '9',
      endDayHour: '18',
      editingFormVisible: false,
      editingAppointmentId: undefined,
      addedAppointment: {},
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
        const { changeData } = this.props;
        for (const key in changed) {
          id = key;
        }
        console.log(changed);
        const data = {
          _id: id,
          startDate: changed[id].startDate,
          endDate: changed[id].endDate,
          location: changed[id].location,
          note: changed[id].notes,
        };
        changeData(this.makeQueryString(), data);
      }
      if (deleted) {
        const { deleteData } = props;
        deleteData(this.makeQueryString(), { id: deleted });
      }
    };
    this.makeQueryString = () => {
      const { currentDate, currentViewName } = this.state;
      const format = 'YYYY-MM-DDTHH:mm:ss';
      const start = moment(currentDate).startOf(currentViewName.toLowerCase());
      const end = start.clone().endOf(currentViewName.toLowerCase());
      return encodeURI(`${URL_SCHEDULER}${start.format(format)}&${end.format(format)}`);
    };
    this.roomChange = (value) => {
      this.setState({ currentRoom: value });
    };
    this.startDayHourChange = (value) => {
      this.setState({ startDayHour: value });
    };
    this.endDayHourChange = (value) => {
      this.setState({ endDayHour: value });
    };
    this.flexibleSpace = connectProps(FlexibleSpace, () => {
      const { startDayHour, endDayHour, currentRoom } = this.state;
      return {
        currentRoom,
        startDayHour,
        endDayHour,
        startDayHourChange: this.startDayHourChange,
        roomChange: this.roomChange,
        endDayHourChange: this.endDayHourChange,
      };
    });
    this.toggleEditingFormVisibility = this.toggleEditingFormVisibility.bind(this);
    this.onEditingAppointmentIdChange = this.onEditingAppointmentIdChange.bind(this);
    this.onAddedAppointmentChange = this.onAddedAppointmentChange.bind(this);
    this.appointmentForm = connectProps(AppointmentFormContainer, () => {
      const {
        editingFormVisible, editingAppointmentId, addedAppointment,
      } = this.state;
      const { items } = this.props;
      const nextItems = items.map(item => ({
        ...item,
        id: item._id,
        title: `${item.name} ${item.lastname} `,
        notes: item.note
      }));
      const currentAppointment = nextItems.filter(appointment => appointment.id === editingAppointmentId)[0] || addedAppointment;
      return {
        visible: editingFormVisible,
        appointmentData: currentAppointment,
        commitChanges: this.commitChanges,
        visibleChange: this.toggleEditingFormVisibility,
        onEditingAppointmentIdChange: this.onEditingAppointmentIdChange,
      };
    });
  }

  componentDidMount = () => {
    const { fetchData } = this.props;
    fetchData(this.makeQueryString());
  }

  componentDidUpdate() {
    this.appointmentForm.update();
    this.flexibleSpace.update();
  }

  onEditingAppointmentIdChange(editingAppointmentId) {
    this.setState({ editingAppointmentId });
  }

  onAddedAppointmentChange(addedAppointment) {
    this.setState({ addedAppointment });
    this.onEditingAppointmentIdChange(undefined);
  }

  toggleEditingFormVisibility() {
    const { editingFormVisible } = this.state;
    this.setState({
      editingFormVisible: !editingFormVisible,
    });
  }

  render() {
    const { hasErrored, isLoading, items } = this.props;
    const {
      currentDate,
      currentViewName,
      currentRoom,
      startDayHour,
      endDayHour,
      editingFormVisible
    } = this.state;
    const nextItems = items.map(item => ({
      ...item,
      id: item._id,
      title: `${item.name} ${item.lastname} ${item.note}`,
    }));
    return (
      <Grid item xs={12} style={{ marginBottom: '25px', paddingLeft: '25px' }}>
        <Header title="Scheduler" />
        {hasErrored && <Error />}
        <Scheduler
          data={filterTasks(nextItems, currentRoom)}
          height={820}
        >
          <ViewState
            currentDate={currentDate}
            currentViewName={currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
            onCurrentDateChange={this.currentDateChange}
          />
          <EditingState
            onCommitChanges={this.commitChanges}
            onEditingAppointmentIdChange={this.onEditingAppointmentIdChange}
            onAddedAppointmentChange={this.onAddedAppointmentChange}
          />
          <DayView
            startDayHour={startDayHour}
            endDayHour={endDayHour}
          />
          <WeekView
            startDayHour={startDayHour}
            endDayHour={endDayHour}
          />

          <Appointments appointmentComponent={appointmentComponent} />
          <AppointmentForm
            popupComponent={this.appointmentForm}
            visible={editingFormVisible}
            onVisibilityChange={this.toggleEditingFormVisibility}
          />
          <Toolbar
            {...isLoading ? { rootComponent: ToolbarWithLoading } : null}
            flexibleSpaceComponent={this.flexibleSpace}
          />
          <ViewSwitcher />
          <DateNavigator />
          <DragDropProvider />
        </Scheduler>

      </Grid>
    );
  }
}

SchedulerPage.PropTypes = {
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
  changeData(urlToFetch, dataChange) {
    dispatch(changeSchedulerData(URL_SCHEDULER, urlToFetch, dataChange));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerPage);

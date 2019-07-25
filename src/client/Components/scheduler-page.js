import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connectProps } from '@devexpress/dx-react-core';
import { withStyles } from '@material-ui/core/styles';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler, WeekView, Appointments, AppointmentTooltip, AppointmentForm, Toolbar, DateNavigator, DragDropProvider, DayView, ViewSwitcher
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

const dragDisableIds = new Set([0, 1, 2, 3]);

const styles = {
  toolbarRoot: {
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
  },
};

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
    this.startDayHourChange = (value) => {
      this.setState({ startDayHour: value });
    };
    this.endDayHourChange = (value) => {
      this.setState({ endDayHour: value });
    };
    this.flexibleSpace = connectProps(FlexibleSpace, () => {
      const { startDayHour, endDayHour } = this.state;
      return {
        startDay: startDayHour,
        endDay: endDayHour,
        startDayHour: this.startDayHourChange,
        endDayHour: this.endDayHourChange,
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
        title: `${item.name} ${item.lastname} ${item.note}`,
      }));
      const currentAppointment = nextItems.filter(appointment => appointment.id === editingAppointmentId)[0] || addedAppointment;
      console.log(currentAppointment);
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
    const { hasErrored, isLoading } = this.props;
    const { items } = this.props;
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
          data={nextItems}
          height={820}
        >
          <ViewState
            currentDate={this.state.currentDate}
            currentViewName={this.state.currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
            onCurrentDateChange={this.currentDateChange}
          />
          <EditingState
            onCommitChanges={this.commitChanges}
            onEditingAppointmentIdChange={this.onEditingAppointmentIdChange}
            onAddedAppointmentChange={this.onAddedAppointmentChange}
          />
          <DayView
            startDayHour={this.state.startDayHour}
            endDayHour={this.state.endDayHour}
          />
          <WeekView
            startDayHour={this.state.startDayHour}
            endDayHour={this.state.endDayHour}
          />

          <Appointments appointmentComponent={appointmentComponent} />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm
            popupComponent={this.appointmentForm}
            visible={this.state.editingFormVisible}
            onVisibilityChange={this.toggleEditingFormVisibility}
          />
          <Toolbar
            {...isLoading ? { rootComponent: ToolbarWithLoading } : null}
            flexibleSpaceComponent={this.flexibleSpace}
          />
          <ViewSwitcher />
          <DateNavigator />
          <DragDropProvider
            allowDrag={allowDrag}
          />
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
  changeData(urlToFetch, dataChange) { dispatch(changeSchedulerData(URL_SCHEDULER, urlToFetch, dataChange)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerPage);

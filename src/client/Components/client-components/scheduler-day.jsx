import React from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

export default (props) => {
  const { schedules, day } = props;

  const dataSchedules = [];
  schedules.forEach((schedule) => {
    schedule.treatments.forEach((treatment) => {
      dataSchedules.push({
        title: treatment.name,
        startDate: treatment.startDate,
        endDate: treatment.endDate
      });
    });
  });

  // console.log(dataSchedules);
  return (
    <Scheduler
      data={dataSchedules}
    >
      <ViewState
        currentDate={day}
      />
      <DayView
        startDayHour={10}
        endDayHour={15}
      />
      <Appointments />
    </Scheduler>
  );
};

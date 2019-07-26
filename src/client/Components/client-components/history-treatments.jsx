import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Agenda from './agenda';
import Scheduler from './scheduler-day';

const getNameMonth = (month) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
  return months[month];
};

const formatDate = (date) => {
  const dateParse = new Date(date);
  const month = getNameMonth(dateParse.getMonth());
  return `${dateParse.getDate()} ${month}, ${dateParse.getFullYear()}`;
};

const getTreatment = (idTreatment, listTreatments) => {
  let treat;
  listTreatments.forEach((listTreatment) => {
    listTreatment.listProcedure.forEach((treatment) => {
      if (treatment.idProcedure === idTreatment) {
        treat = {
          name: treatment.name,
          cost: treatment.cost
        };
      }
    });
  });

  return treat;
};

const getSortSchedule = (modifiedSchedules) => {
  // eslint-disable-next-line prefer-const
  let schedules = [];
  modifiedSchedules.forEach((modifiedSchedule) => {
    let flag = true;
    schedules.forEach((schedule) => {
      if (modifiedSchedule.formatDate === schedule.title) {
        schedule.treatments.push({
          name: modifiedSchedule.treatment.name,
          cost: modifiedSchedule.treatment.cost,
          startDate: new Date(modifiedSchedule.date.start),
          endDate: new Date(modifiedSchedule.date.end)
        });

        flag = false;
      }
    });

    if (flag) {
      schedules.push({
        title: modifiedSchedule.formatDate,
        treatments: [{
          name: modifiedSchedule.treatment.name,
          cost: modifiedSchedule.treatment.cost,
          startDate: new Date(modifiedSchedule.date.start),
          endDate: new Date(modifiedSchedule.date.end),
        }]
      });
    }
  });

  return schedules;
};

const useStyles = makeStyles(theme => ({
  root: {
    height: '87%',
  }
}));

export default (props) => {
  const { schedules, listTreatment } = props;
  const classes = useStyles();

  const modifiedSchedules = schedules.map(schedule => ({
    formatDate: formatDate(schedule.startDate),
    treatment: getTreatment(schedule.idTreatment, listTreatment),
    date: {
      start: schedule.startDate,
      end: schedule.endDate
    },
  }));

  const sortSchedules = getSortSchedule(modifiedSchedules);
  return (
    <Paper className={classes.root}>
      <Grid container direction="row">

        <Grid item xs={5}>
          <Agenda schedules={sortSchedules} />
        </Grid>

        <Grid item xs={7}>
          <Scheduler schedules={sortSchedules} day="2019-07-02" />
        </Grid>

      </Grid>
    </Paper>
  );
};

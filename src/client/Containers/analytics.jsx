import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

let useStyles;

export default function Analytics() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Paper className={classes.totalPatient}>Total Patient</Paper>
          <Paper className={classes.agePatient}>Age of Patient</Paper>
        </Grid>

        <Grid container xs={9} className={classes.rightArea}>

          <Grid container direction="row" spacing={3} className={classes.topDashboard}>
            <Grid item xs={4}>
              <Paper className={classes.topBoard}>New Feedbacks</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.topBoard}>Happy Clients</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.topBoard}>New Patients</Paper>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.centreDashboard}>
            <Paper className={classes.centreBoard}>New Patients</Paper>
          </Grid>

          <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.bottomBoard}>Hospital Survey</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.bottomBoard}>Visit Patient</Paper>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
}

useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '25px',
    paddingRight: '15px',
    paddingTop: '25px',
    backgroundColor: '#E9ECF1'
  },
  totalPatient: {
    height: '200px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: '25px'
  },
  agePatient: {
    height: '475px',
    color: theme.palette.text.secondary,
  },
  rightArea: {
    paddingTop: '20px',
    paddingRight: '20px'
  },
  topDashboard: {
  },
  topBoard: {
    height: '130px',
    color: theme.palette.text.secondary,
  },
  centreDashboard: {
  },
  centreBoard: {
    paddingBottom: '20px',
    height: '290px',
    color: theme.palette.text.secondary
  },
  bottomBoard: {
    height: '220px',
    color: theme.palette.text.secondary,
  }
}));

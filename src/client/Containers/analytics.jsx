import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import AnalyticsAge from './analyticsAge';
import AnalyticsHospital from './analyticsHospital';
import AnalyticsNew from './analyticsNew';
import AnalyticsTotal from './analyticsTotal';
import AnalyticsVisit from './analyticsVisit';

export default function Analytics() {
  // eslint-disable-next-line no-use-before-define
  const classes = useStyles();

  return (
    <Grid container direction="column">

      {/* Top Menu */}
      <Grid item xs={12}>
        <Typography className={classes.header}>Analytics</Typography>
      </Grid>

      {/* Body */}
      <Grid container direction="row" justify="space-between" className={classes.root}>

        {/* Left Area */}
        <Grid container xs={3} justify="space-between" direction="column">
          <Grid item>
            <Paper className={classes.totalPatient}><AnalyticsTotal /></Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.agePatient}><AnalyticsAge /></Paper>
          </Grid>
        </Grid>

        {/* Right Area */}
        <Grid container xs={9} direction="column" justify="space-between" className={classes.rightArea}>

          {/* Top Dashboard */}
          <Grid item>
            <Grid container spacing={2} className={classes.topDashboard}>
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
          </Grid>

          {/* Center Dashboard */}
          <Grid item>
            <Grid item xs={12} className={classes.centerDashboard}>
              <Paper className={classes.centerBoard}><AnalyticsNew /></Paper>
            </Grid>
          </Grid>

          {/* Bottom Dashboard */}
          <Grid item>
            <Grid container spacing={2} direction="row">
              <Grid item xs={6}>
                <Paper className={classes.bottomBoard}><AnalyticsHospital /></Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.bottomBoard}><AnalyticsVisit /></Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'left',
    fontSize: 18,
    height: '3vh',
    padding: '15px',
    color: theme.palette.text.secondary,
  },
  root: {
    backgroundColor: '#E9ECF1',
    height: '94vh',
    margin: '0px',
    padding: '25px',
  },
  totalPatient: {
    height: '30vh',
    color: theme.palette.text.secondary,
  },
  agePatient: {
    height: '56.5vh',
    color: theme.palette.text.secondary,
  },
  rightArea: {
    paddingLeft: '25px'
  },
  topDashboard: {
  },
  topBoard: {
    height: '20vh',
    color: theme.palette.text.secondary,
  },
  centerDashboard: {
  },
  centerBoard: {
    height: '39vh',
    color: theme.palette.text.secondary
  },
  bottomBoard: {
    height: '25vh',
    color: theme.palette.text.secondary,
  }
}));

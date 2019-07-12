import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

let useStyles;

function TopMenu() {
  const classes = useStyles();

  return (
    <Grid item xs={12} style={{ marginBottom: '25px', paddingLeft: '25px' }}>
      <Typography className={classes.header}>Analytics</Typography>
    </Grid>
  );
}

function LeftDashboard() {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Paper className={classes.totalPatient}>Total Patient</Paper>
      <Paper className={classes.agePatient}>Age of Patient</Paper>
    </Grid>
  );
}

function TopDashboard() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.topDashboard}>
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
  );
}

function CentreDashboard() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.centreDashboard}>
      <Paper className={classes.centreBoard}>New Patients</Paper>
    </Grid>
  );
}

function BottomDashboard() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.bottomBoard}>Hospital Survey</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.bottomBoard}>Visit Patient</Paper>
      </Grid>
    </Grid>
  );
}

export default function Analytics() {
  const classes = useStyles();

  return (
    <div style={{ width: 'auto' }}>
      <TopMenu />
      <div className={classes.root}>
        <Grid container spacing={5}>
          <LeftDashboard />
          <Grid container xs={9} className={classes.rightArea}>
            <TopDashboard />
            <CentreDashboard />
            <BottomDashboard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'left',
    fontSize: 18,
    color: theme.palette.text.secondary,
  },
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

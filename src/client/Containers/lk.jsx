import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'left',
    fontSize: 18,
    height: '4vh',
    padding: '15px',
    color: theme.palette.text.secondary,
  },
  root: {
    backgroundColor: '#E9ECF1',
    height: '96vh',
    margin: '0px',
  },
  personalArea: {
    backgroundColor: '#FFF',
    margin: '0px',
  },
  workArea: {
    backgroundColor: '#FFF',
  },
  scheduler: {
  }
}));

export default function Lk() {
  const classes = useStyles();

  return (
    <Grid container direction="column">

      {/* Top Menu */}
      <Grid item xs={12} className={classes.header}>
        <Typography>My Account</Typography>
      </Grid>

      {/* Body */}
      <Grid container direction="row" xs={12} className={classes.root}>

        {/* Personal Area */}
        <Grid container xs={2} direction="column" spacing={5} className={classes.personalArea}>

          {/* Name */}
          <Grid item>
            <Grid container justify="center">
              <Typography className={classes.leftAreaText}>Jack Gardner</Typography>
            </Grid>
          </Grid>

          {/* Personal Data */}
          <Grid item>
            <Typography className={classes.leftAreaText}>Birth Data</Typography>
            <Paper className={classes.leftAreaPaper}>4/19/1983</Paper>
            <Typography className={classes.leftAreaText}>Phone</Typography>
            <Paper className={classes.leftAreaPaper}>765-052-5230</Paper>
            <Typography className={classes.leftAreaText}>Email</Typography>
            <Paper className={classes.leftAreaPaper}>harrington@email.com</Paper>
          </Grid>

          {/* Address */}
          <Grid item>
            <Typography className={classes.leftAreaText}>City</Typography>
            <Paper className={classes.leftAreaPaper}>Whitter</Paper>
            <Typography className={classes.leftAreaText}>Address</Typography>
            <Paper className={classes.leftAreaPaper}>6755 Newline Ave</Paper>
          </Grid>

        </Grid>

        {/* Work Area */}
        <Grid container xs={10} justify="center" style={{ padding: '25px' }}>
          <Grid container className={classes.workArea}>

            <Grid item xs={6}>
              <Typography className={classes.scheduler}>Scheduler</Typography>
            </Grid>

            <Grid container xs={6} direction="column">
              <Typography>Calendar</Typography>
              <Typography>Timeline</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
}

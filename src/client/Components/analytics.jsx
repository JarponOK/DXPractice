import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AnalyticsAge from './analytic-pages/analytics-age';
import AnalyticsHospital from './analytic-pages/analytics-hospital';
import AnalyticsNew from './analytic-pages/analytics-new';
import AnalyticsTotal from './analytic-pages/analytics-total';
import AnalyticsVisit from './analytic-pages/analytics-visit';
import Header from './header';

export default function Analytics() {
  // eslint-disable-next-line no-use-before-define
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Header title="Analytics" />
      <Grid container direction="row" className={classes.root}>

        <Grid item xs={3}>
          <Grid container justify="space-between" direction="column" spacing={2}>
            <Grid item>
              <AnalyticsTotal />
            </Grid>
            <Grid item>
              <AnalyticsAge />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={9}>
          <Grid container direction="column" justify="space-between" spacing={2} className={classes.rightArea}>
            <Grid item>
              <Grid container spacing={2} direction="row" className={classes.topDashboard}>
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

            <Grid item>
              <Grid item xs={12} className={classes.centerDashboard}>
                <AnalyticsNew />
              </Grid>
            </Grid>

            <Grid item>
              <Grid container spacing={2} direction="row">
                <Grid item xs={6}>
                  <AnalyticsHospital />
                </Grid>
                <Grid item xs={6}>
                  <AnalyticsVisit />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#E9ECF1',
    height: '97vh',
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

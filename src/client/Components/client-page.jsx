import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Tabs, Tab, Typography } from '@material-ui/core/';

let useStyles;

function TreatmentContainer() { /* eslint-disable */
  return (
    <Tabs variant="fullWidth">
      <Tab label="Diagnosis" />
      <Tab label="Restoration" />
      <Tab label="Root canal" />
      <Tab label="Hygiene" />
      <Tab label="Whitening" />
      <Tab label="Prosthetics" />
      <Tab label="Implantation" />
      <Tab label="Orthodontics" />
      <Tab label="Surgery" />
    </Tabs>
  );
}

function HistoryContainer() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper>Plan</Paper>
        <Paper>Total Amount</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Meeting</Paper>
      </Grid>
    </Grid>
  );
}

function ComplaintsContainer() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper>Complaints</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Notes</Paper>
      </Grid>
    </Grid>
  );
}

function PersonalData() {
  const classes = useStyles();

  return (
    <Grid container direction="column" xs={2} style={{ backgroundColor: '#FFF' }}>
      <Paper>
        <div style={{ marginLeft: '10px' }}>
          <div style={{ marginBottom: '50px' }}>
            <Typography className={classes.leftAreaText}>Name</Typography>
            <Paper className={classes.leftAreaPaper}>Derick</Paper>
            <Typography className={classes.leftAreaText}>Surname</Typography>
            <Paper className={classes.leftAreaPaper}>Lawson</Paper>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <Typography className={classes.leftAreaText}>Birth Data</Typography>
            <Paper className={classes.leftAreaPaper}>4/19/1983</Paper>
            <Typography className={classes.leftAreaText}>Phone</Typography>
            <Paper className={classes.leftAreaPaper}>765-052-5230</Paper>
            <Typography className={classes.leftAreaText}>Email</Typography>
            <Paper className={classes.leftAreaPaper}>harrington@email.com</Paper>
          </div>
          <div>
            <Typography className={classes.leftAreaText}>City</Typography>
            <Paper className={classes.leftAreaPaper}>Whitter</Paper>
            <Typography className={classes.leftAreaText}>Address</Typography>
            <Paper className={classes.leftAreaPaper}>6755 Newline Ave</Paper>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

export default function ClientArea() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Grid container direction="column">

      {/* Top Menu */}
      <Grid item xs={12}>
        <Typography className={classes.header}>Patient Card</Typography>
      </Grid>

      {/* Body */}
      <Grid container className={classes.root}>

        <PersonalData />

        <Grid container xs={10} direction="column" justify="flex-start">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Treatment" />
            <Tab label="Treatment history" />
            <Tab label="Complaints" />
          </Tabs>
          {value === 0 && <TreatmentContainer />}
          {value === 1 && <HistoryContainer />}
          {value === 2 && <ComplaintsContainer />}
        </Grid>

      </Grid>
    </Grid>
  );
}

useStyles = makeStyles(theme => ({
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
  },
  leftAreaText: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginBottom: '3px'
  },
  leftAreaPaper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    marginRight: '10px',
    marginBottom: '5px'
  },
}));

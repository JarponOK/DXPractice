import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Tabs, Tab } from '@material-ui/core/';

let useStyles;

function TreatmentContainer() {
  return (
    <Grid container>
      <Tabs>
        <Tab label="Diagnosis" />
        <Tab label="Restoration" />
      </Tabs>
    </Grid>
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
    <Grid container direction="column" xs={3} style={{ backgroundColor: '#FFF' }}>
      <Paper>
        <div style={{ marginLeft: '10px' }}>
          <div style={{ marginBottom: '50px' }}>
            <p className={classes.leftAreaText}>Name</p>
            <Paper className={classes.leftAreaPaper}>Derick</Paper>
            <p className={classes.leftAreaText}>Surname</p>
            <Paper className={classes.leftAreaPaper}>Lawson</Paper>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <p className={classes.leftAreaText}>Birth Data</p>
            <Paper className={classes.leftAreaPaper}>4/19/1983</Paper>
            <p className={classes.leftAreaText}>Phone</p>
            <Paper className={classes.leftAreaPaper}>765-052-5230</Paper>
            <p className={classes.leftAreaText}>Email</p>
            <Paper className={classes.leftAreaPaper}>harrington@email.com</Paper>
          </div>
          <div>
            <p className={classes.leftAreaText}>City</p>
            <Paper className={classes.leftAreaPaper}>Whitter</Paper>
            <p className={classes.leftAreaText}>Address</p>
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
    <div className={classes.root}>
      <Grid container>
        <PersonalData />
        <Grid container xs={9} direction="column">
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
    </div>
  );
}

useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#E9ECF1'
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

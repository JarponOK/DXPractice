import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import FiberManualRecordOutlined from '@material-ui/icons/FiberManualRecordOutlined';
import FiberManualRecordRounded from '@material-ui/icons/FiberManualRecordRounded';
import makeStyles from '@material-ui/core/styles/makeStyles';

const getTotalAmount = (schedules) => {
  let totalAmount = 0;

  schedules.forEach((schedule) => {
    schedule.treatments.forEach((treatment) => {
      totalAmount += treatment.cost;
    });
  });

  return totalAmount;
};

const useStyles = makeStyles(theme => ({
  title: {
    backgroundColor: '#E4EBF9'
  },
  panelComponent: {
    justifyContent: 'space-between',
  },
  before: {
    color: '#00C078',
    marginRight: theme.spacing(2)
  },
  after: {
    color: '#4C76CF',
    marginRight: theme.spacing(2)
  }
}));

export default (props) => {
  const { schedules } = props;
  const classes = useStyles();

  const totalAmount = getTotalAmount(schedules);
  return (
    <Grid>
      <Container>
        <Box>
          {
            schedules.map(schedule => (
              <ExpansionPanel square>
                <ExpansionPanelSummary className={classes.title}>
                  <Grid container justify="space-between">
                    <Typography>
                      {schedule.title}
                    </Typography>
                    <ArrowDropDown />
                  </Grid>
                </ExpansionPanelSummary>
                {
                  schedule.treatments.map(treatment => (
                    <ExpansionPanelDetails className={classes.panelComponent}>
                      <Grid container direction="row" justify="flex-start">
                        {
                          treatment.startDate > new Date()
                            ? <FiberManualRecordOutlined className={classes.after} />
                            : <FiberManualRecordRounded className={classes.before} />
                        }
                        <Typography>
                          {treatment.name}
                        </Typography>
                      </Grid>
                      <Typography>
                        {treatment.cost}
                        $
                      </Typography>
                    </ExpansionPanelDetails>
                  ))
                }
              </ExpansionPanel>
            ))
          }
        </Box>
      </Container>
      <Paper>
        <Grid container direction="row" justify="space-between">
          <Typography>
            Total Amount
          </Typography>
          <Typography>
            {totalAmount}
            $
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

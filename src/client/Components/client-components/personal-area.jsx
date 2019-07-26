import React from 'react';
import {
  Paper, Grid
} from '@material-ui/core/';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Delete from '@material-ui/icons/Delete';
import TextField from './text-field';

const useStyles = makeStyles(theme => ({
  root: {
    height: '97vh',
  },
  dateArea: {
    marginBottom: '40px'
  }
}));

export default (props) => {
  const classes = useStyles();

  const { data } = props;
  let birthday = new Date(data.birthday);
  birthday = `${birthday.getMonth()}/${birthday.getDate()}/${birthday.getFullYear()}`;
  return (
    <Grid item className={classes.root}>
      <Grid container direction="column">
        <Paper>
          <Grid className={classes.dateArea}>
            <TextField
              disabled
              title="Name"
              value={data.name}
            />
            <TextField
              disabled
              title="Surname"
              value={data.lastname}
            />
          </Grid>
          <Grid className={classes.dateArea}>
            <TextField
              disabled
              title="Birth Data"
              value={birthday}
            />
            <TextField
              disabled
              title="Phone"
              value={data.phone}
            />
            <TextField
              disabled
              title="Email"
              value={data.email}
            />
          </Grid>
          <Grid className={classes.dateArea}>
            <TextField
              disabled
              title="City"
              value={data.city}
            />
            <TextField
              disabled
              title="Address"
              value={data.address}
            />
          </Grid>
          <Delete />
        </Paper>
      </Grid>
    </Grid>
  );
};

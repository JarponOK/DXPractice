import React from 'react';
import {
  Paper, Grid
} from '@material-ui/core/';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Delete from '@material-ui/icons/Delete';
import TextField from './text-field';

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.secondary
  }
}));

export default (props) => {
  const classes = useStyles();

  const { data } = props;
  let birthday = new Date(data.birthday);
  birthday = `${birthday.getMonth()}/${birthday.getDate()}/${birthday.getFullYear()}`;
  return (
    <Grid container direction="column" xs={2} className={classes.root}>
      <Paper>
        <div style={{ marginBottom: '50px' }}>
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
        </div>
        <div style={{ marginBottom: '40px' }}>
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
        </div>
        <div>
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
        </div>
        <Delete />
      </Paper>
    </Grid>
  );
};

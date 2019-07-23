import React from 'react';
import {
  Typography, TextField, Grid, Box
} from '@material-ui/core/';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  },
  title: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  body: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: 40,
  },
}));

export default (props) => {
  const { title, value, disabled } = props;
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Typography
        className={classes.title}
        component="div"
      >
        <Box fontSize={14}>{title}</Box>
      </Typography>
      <TextField
        className={classes.body}
        disabled={disabled !== undefined}
        value={value}
        variant="outlined"
        fullWidth
      />
    </Grid>
  );
};

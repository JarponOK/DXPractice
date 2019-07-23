import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    fontSize: 18,
    height: '3vh',
    padding: '15px',
    color: theme.palette.text.secondary,
  },
}));

export default (props) => {
  const classes = useStyles();
  const { title } = props;

  return (
    <Grid item xs={12}>
      <Typography className={classes.root}>{title}</Typography>
    </Grid>
  );
};

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'left',
    fontSize: 18,
    color: theme.palette.text.secondary,
  }
}));
function TopMenu() {
  const classes = useStyles();

  return (
    <Grid item xs={12} style={{ marginBottom: '25px', paddingLeft: '25px' }}>
      <Typography className={classes.header}>Lk</Typography>
    </Grid>
  );
}
export default function Lk() {
  return (
    <TopMenu />
  );
}

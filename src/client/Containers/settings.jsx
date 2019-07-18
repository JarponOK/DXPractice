import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Paper, Grid, Typography, Button, TextField, InputAdornment, IconButton
} from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import { themeReturn } from '../Actions/itemThemes';


const useStyles = theme => ({
  header: {
    textAlign: 'left',
    fontSize: 18,
    padding: '15px',
    color: theme.palette.text.secondary,
  },
  body: {
    height: '86vh',
    margin: '0px',
    padding: '25px',
  },
  button: {
    marginRight: '25px',
  }
});

const SettingsBase = ({ classes, themeChange }) => {
  return (
    <Grid item xs={12} style={{ paddingBottom: '25px', paddingLeft: '25px' }} container direction="column">
      <Typography className={classes.header}>Settings</Typography>
      <Typography className={classes.body}>
        <Button className={classes.button} color="secondary" variant="contained" onClick={() => { themeChange('dark'); }}>
          Dark
        </Button>
        <Button className={classes.button} color="secondary" variant="contained" onClick={() => { themeChange('light'); }}>
          Light
        </Button>
      </Typography>
    </Grid>
  );
};
const SettingsPage = withStyles(useStyles)(SettingsBase);
const mapStateToProps = state => ({
  themeName: state.themeReturn.themeName,
});


const mapDispatchToProps = dispatch => ({
  themeChange: themeName => dispatch(themeReturn(themeName))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);

import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid, Typography, Button
} from '@material-ui/core';
import { themeReturn } from '../actions/item-themes';
import Header from './header';

const useStyles = () => ({
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
      <Header title="Settings" />
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

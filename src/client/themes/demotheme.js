import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  blue, purple, green, yellow
} from '@material-ui/core/colors';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: blue,
    secondary: yellow,
  },
  typography: {
    useNextVariants: true,
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    secondary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

class DemoContainer extends Component {
  render() {
    console.log(this.props);
    const { appTheme, children } = this.props;
    if (appTheme === 'light') {
      return (
        <MuiThemeProvider theme={lightTheme}>
          {children}
        </MuiThemeProvider>
      );
    }

    if (appTheme === 'dark') {
      return (
        <MuiThemeProvider theme={darkTheme}>
          {children}
        </MuiThemeProvider>
      );
    }
  }
}

DemoContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  appTheme: state.themeReturn.appTheme,
});

export default connect(mapStateToProps)(DemoContainer);

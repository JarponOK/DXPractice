import React from 'react';
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

const ThemeContainer = ({ themeName, children }) => (
  <MuiThemeProvider theme={themeName === 'light' ? lightTheme : darkTheme}>
    {children}
  </MuiThemeProvider>
);

ThemeContainer.propTypes = {
  children: PropTypes.node.isRequired,
  themeName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  themeName: state.themeReturn.themeName,
});

export default connect(mapStateToProps)(ThemeContainer);

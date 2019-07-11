import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { store } from './Store/configureStore';
import App from './Components/App';
import theme from './themes/theme';

export default class Header extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);

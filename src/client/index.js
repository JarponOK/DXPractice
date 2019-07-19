import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import App from './containers/app';
import ThemeContainer from './themes/theme-type';

const initialStore = configureStore();

export default class Root extends PureComponent {
  render() {
    return (
      <Provider store={initialStore}>
        <ThemeContainer>
          <App />
        </ThemeContainer>
      </Provider>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

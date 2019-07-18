import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import App from './Components/App';
import ThemeContainer from './themes/demotheme';

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

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import App from './Components/App';
import DemoContainer, { Dark } from './themes/demotheme'


export default class Header extends PureComponent {
  render() {
    return (
      <Provider store={configureStore()}>
        <DemoContainer>
          <App />
        </DemoContainer>
      </Provider>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);

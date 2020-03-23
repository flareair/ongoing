import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import configureStore from './configureStore';
import initialState from './initialState';

const store = configureStore(initialState);
function Root() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

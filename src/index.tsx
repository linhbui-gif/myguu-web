import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '@/App';
import configureStore from '@/redux/configureStore';

import './assets/styles/_main.scss';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);

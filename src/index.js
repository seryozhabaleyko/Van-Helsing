import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
import App from './App';
import ErrorBoundary from 'components/ErrorBoundary';

import 'antd/dist/antd.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
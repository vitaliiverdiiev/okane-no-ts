import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/app';
import { store } from './store/store';

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));

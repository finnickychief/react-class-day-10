import React from 'react';
import ReactDOM from 'react-dom';
import { sayHi } from './types';
import { BrowserRouter } from 'react-router-dom';

sayHi();

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
);

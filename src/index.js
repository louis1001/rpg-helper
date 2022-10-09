import React from 'react';
import ReactDOM from 'react-dom/client';

import {RouterProvider} from 'react-router-dom'

import './assets/styles/index.css';
import './assets/styles/reset.css';

import reportWebVitals from './utils/reportWebVitals';

import { router } from './utils/wander-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

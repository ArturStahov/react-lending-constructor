import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '@csstools/normalize.css';
import './sass/main.scss';
import AuthProvider from './components/AuthProvider'

import App from './App';






ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>
  ,
  document.getElementById('root')
);


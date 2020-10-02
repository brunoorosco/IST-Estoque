import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import pt from 'moment/locale/pt-br'
import App from './pages/App';
import './styles/global.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

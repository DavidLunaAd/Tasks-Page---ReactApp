import React from 'react';
import ReactDOM from 'react-dom/client';

//Añadimos Bootstrap encima de los estilos
import 'bootstrap/dist/css/bootstrap.css';
//Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'
//Estilos propios debajo del de bootstrap
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRouting from './AppRouting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import store from './redux/store';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//     <App />
//     </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

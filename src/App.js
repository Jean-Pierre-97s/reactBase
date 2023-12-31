import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from './shared/services/history';
import GlobalStyle from './shared/styles/globalStyles';
import Header from './components/header';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={1000} className="toast-container" />
    </Router>
  );
}

export default App;

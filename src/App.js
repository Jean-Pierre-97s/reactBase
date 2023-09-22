import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import GlobalStyle from './shared/styles/globalStyles';
import Header from './components/header';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;

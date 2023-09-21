/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom'; // Importe createRoot em vez de ReactDOM
import App from './App';

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CountContextProvider } from './context/context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <CountContextProvider>
   <App />
   </CountContextProvider>
  </React.StrictMode>
);



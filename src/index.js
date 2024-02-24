import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GoogleOAuthProvider} from '@react-oauth/google'
import { Provider } from 'react-redux';
import { _Store } from './Redux/_Store';
import { Test_context } from './test/Test_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='681504572844-usas32cn2fm092v2u64dfu10d0v4os83.apps.googleusercontent.com'>
  <React.StrictMode>
    <Provider store={_Store}>
        <App />
    </Provider>
    
  </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

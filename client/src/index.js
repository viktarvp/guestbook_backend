import React from 'react';
import ReactDOM from 'react-dom';
// import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// const queryClient = new QueryClient();

ReactDOM.render(
  // <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </QueryClientProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

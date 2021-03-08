import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Heading from './Heading'

ReactDOM.render(
  <>
  <Heading/>
    <p id="sub-heading">My favourite applications are</p>
    <ol>
      <li>ABC1</li>
      <li>ABC2</li>
      <li>ABC3</li>
      <li>ABC4</li>
      <li>ABC5</li>
    </ol>
    <Heading/>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <div className="cards">
      <div class="card">
        <img className="profile" src="https://source.unsplash.com/random/500x500" alt="Card image cap"/>
        <div className="card__info">
          <h1 className="name">Rajat Gupta</h1>
          <span className="employee_id">E038</span>
        </div>
      </div>
    </div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

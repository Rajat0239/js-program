import './App.css';
import React from 'react';
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/Components/Home';
import CreateOrders from '../src/Components/CreateOrders';
import ViewOrderList from '../src/Components/ViewOrderList';
import OrderList from '../src/Components/OrderList';

function App() {
  return (
        <Router>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/createorders" component={CreateOrders} />
            <Route path="/vieworderlist" component={ViewOrderList} />
            <Route path="/orderlist" component={OrderList} />
          </Switch>
        </Router>
  );
}

export default App;

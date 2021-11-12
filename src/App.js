import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppCustomers from './components/AppCustomers';
import AppProducts from './components/AppProducts';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/customers'>Customers</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/customers'>
            <AppCustomers />
          </Route>
          <Route path='/products'>
            <AppProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

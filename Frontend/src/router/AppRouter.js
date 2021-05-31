import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Register from '../components/Register';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <div className="main-content">
        <Switch>
          <Route component={Login} path="/" exact={true} />
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          <Route component={Profile} path="/profile" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import FilesList from '../components/FilesList';
import all from '../components/all-pages';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <div className="main-content">
        <Switch>
          <Route component={App} path="/list" exact={true} />
          <Route component={FilesList} path="/" />
          <Route component={all} path="/pdf" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
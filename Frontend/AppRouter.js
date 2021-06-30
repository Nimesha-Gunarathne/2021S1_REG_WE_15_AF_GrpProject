import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './src/components/Profile/Profile';
import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';
import UpdateProfile from './src/components/Profile/UpdateProfile';
import AllResearchPapers from './src/components/viewAllFiles/fileListResearchPapers';
import AllWorkshopProposals from './src/components/viewAllFiles/fileListWorkshopProposals';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <div className="main-content">
        <Switch>
          <Route component={Login} path="/" exact={true} />
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          <Route component={Profile} path="/profile" />
          <Route component={UpdateProfile} path="/update-profile" />
          <Route path="/research" component={AllResearchPapers} />
          <Route path="/workshop" component={AllWorkshopProposals} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
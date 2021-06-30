import React from 'react';
import Navbar from './src/components/Navbar';
import './src/App.css';
import Home from './src/components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './src/components/pages/Services';
import Products from './src/components/pages/Products';
import SignUp from './src/components/pages/SignUp';
import Register from './src/components/pages/Register';
import Editor from './src/components/pages/Eaditor';
import Approvedconference from './src/components/pages/ApprovedConference';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/register' component={Register} />
          <Route path='/editor' component={Editor} />
          <Route path="/approvedconference" component={Approvedconference}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;

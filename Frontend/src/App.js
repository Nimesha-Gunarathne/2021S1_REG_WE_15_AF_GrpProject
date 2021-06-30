import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Register';
import Editor from './components/pages/Eaditor';
import Approvedconference from './components/pages/ApprovedConference';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
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

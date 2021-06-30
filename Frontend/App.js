import React from 'react';
import Navbar from './src/components/Navbar';
import './src/App.css';
import Home from './src/components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './src/components/pages/Services';
import Products from './src/components/pages/Products';
import SignUp from './src/components/pages/SignUp';
import AddConference from './src/components/pages/AddConference';
import Editor from './src/components/pages/Eaditor';
import Approvedconference from './src/components/pages/ApprovedConference';
import Dashboard from './src/components/pages/Dashboard';

// Sadunika
import Login from './src/components/pages/Login/Login';
import UserRegister from './src/components/pages/Register/Register';
import Profile from './src/components/pages/Profile/Profile';
import UpdateProfile from './src/components/pages/Profile/UpdateProfile';

//Nimesha
import FileUpload from './src/components/pages/templateManager/fileUpload';
import FileList from './src/components/pages/templateManager/fileList';
import Payment from './src/components/pages/payment/payment';

//Galagoda
import AllResearchPapers from './src/components/pages/viewAllFiles/fileListResearchPapers';
import AllWorkshopProposals from './src/components/pages/viewAllFiles/fileListWorkshopProposals';
import ApprovedResearches from './src/components/pages/conferenceContent/ApprovedResearchPapres';
import ApprovedWorkshops from './src/components/pages/conferenceContent/ApprovedWorkshopProposals';


function App() {
  return (
    <>
      <Router>

          <Switch>
          <Route path='/home' component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/add-conference' component={AddConference} />
          <Route path='/editor' component={Editor} />
          <Route path="/approvedconference" component={Approvedconference}/>
          <Route path="/dashboard" component={Dashboard}/>

        {/* Sadunika */}
          <Route component={Login} path="/" exact={true} />
          <Route component={Login} path="/login" />
          <Route component={UserRegister} path="/userregister" />
          <Route component={Profile} path="/profile" />
          <Route component={UpdateProfile} path="/update-profile" />

          {/* Nimesha */}
          <Route component={FileUpload} path="/upload" />
          <Route component={FileList} path="/download" />
          <Route component={Payment} path="/payment" />

          {/* Galagoda */}

          <Route component={AllResearchPapers} path="/research" />
          <Route component={AllWorkshopProposals} path="/workshop" />
          <Route component={ApprovedResearches} path="/approved-research" />
          <Route component={ApprovedWorkshops} path="/approved-workshop" />

          </Switch>
         
      </Router>
    </>
  );
}

export default App;

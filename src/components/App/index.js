import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Landing from '../Landing';
import Home from '../Home';
import Admin from '../Admin';
import Account from '../Account';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import SignUp from '../SignUp';

import * as ROUTES from '../../constants/routes.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;

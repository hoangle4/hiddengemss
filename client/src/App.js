import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MapState from './context/map/MapState';
import AuthState from './context/auth/AuthState';

import Map from './views/Map';
// import Dashboard from './Dashboard';
// import MyAccount from './MyAccount';
import SignUp from './views/SignUp';
import LogIn from './views/LogIn';
// import Profile from './Profile';
// import Gem from './Gem';
// import Test from './test.js';
import LandingPage from './views/LandingPage';
const App = () => {
  return (
    <AuthState>
      <MapState>
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/map' component={Map} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={LogIn} />
          </Switch>
        </Router>
      </MapState>
    </AuthState>
  );
};

export default App;

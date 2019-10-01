import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MapState from './context/map/MapState';
import Map from './views/Map';
// import Dashboard from './Dashboard';
// import MyAccount from './MyAccount';
// import SignUp from './Signup';
// import Login from './Login';
// import Profile from './Profile';
// import Gem from './Gem';
// import Test from './test.js';
import LandingPage from './views/LandingPage';
const App = () => {
	return (
		<MapState>
			<Router>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/map' component={Map} />
				</Switch>
			</Router>
		</MapState>
	);
};

export default App;

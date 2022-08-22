import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from './Home';
//import SignIn from './SignIn'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
    </Scene>
  </Router>
);
export default Routes;

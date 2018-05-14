import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Climb from './climb/climb';
import Landing from './landing/landing';
import ClimbList from './climbList/climbList'; 

const Routes = () => (
  <Router>
    <switch>
      {/* <Route exact path='/' component={Landing} /> */}
      <Route path='/climbList/:state' component={ClimbList} />
      <Route path='/climb/:climbName' component={Climb} />
    </switch>
  </Router>
);

export default Routes;
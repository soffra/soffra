import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Climb from './climb/climb';
import Landing from './landing/landing';
import ClimbList from './climbList/climbList';
import Test from './test';

const Routes = () => (
  <Router>
    <switch>
      <Route exact path='/landing' component={Landing} />
      <Route path='/test' component= {Test}/>
      <Route path='/climbList/:state' component={ClimbList} />
      <Route path='/climb/:climbName' component={Climb} />
    </switch>
  </Router>
);

export default Routes;
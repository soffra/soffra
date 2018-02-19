import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './landing/landing';
// import Climb from './climb/climb';

const Routes = () => (
  <Router>
    <switch>
      <Route exact path='/' component={Landing} />

    </switch>
  </Router>
);

export default Routes;
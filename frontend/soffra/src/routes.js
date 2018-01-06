import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Climb from './climb/climb';

const Routes = () => (
  <Router>
    <switch>
      <Route exact path='/' component={Climb} />
    </switch>
  </Router>
);

export default Routes;
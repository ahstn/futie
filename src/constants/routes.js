import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import React from 'react';

import App from '../containers/App';
import LiveScores from '../containers/LiveScores';
import Euros from '../containers/Euros';
import LeagueTables from '../containers/LeagueTables';
import Team from '../containers/Team';

export default (
  <Router history={ browserHistory }>
    <Route component={ App } path='/'>
      <IndexRoute component={ LiveScores } />
      <Route component={ LiveScores } path='/scores' />
      <Route component={ Euros } path='/euros' />
      <Route component={ Euros } path='/euros/:id' />
      <Route component={ LeagueTables } path='/tables' />
      <Route component={ LeagueTables } path='/tables/:id' />
      <Route component={ Team } path='/team/:id' />
    </Route>
  </Router>
);

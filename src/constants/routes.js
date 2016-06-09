import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import React from 'react';

import App from '../containers/App';
import LiveScores from '../containers/LiveScores';
import LeagueTables from '../containers/LeagueTables';

export default (
  <Router history={ browserHistory }>
    <Route component={ App } path='/'>
      <IndexRoute component={ LiveScores } />
      <Route component={ LiveScores } path='/scores' />
      <Route component={ LeagueTables } path='/tables' />
      <Route component={ LeagueTables } path='/tables/:id' />
    </Route>
  </Router>
);

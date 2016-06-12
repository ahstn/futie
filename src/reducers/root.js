import { combineReducers } from 'redux';

import teams from './teams';
import leagues from './leagues';
import scoresByLeague from './scores';

const rootReducer = combineReducers({
  scoresByLeague,
  leagues,
  teams
});

export default rootReducer;

import { combineReducers } from 'redux';

import leagues from './leagues';
import scoresByLeague from './scores';

const rootReducer = combineReducers({
  scoresByLeague,
  leagues
});

export default rootReducer;

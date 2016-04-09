import { combineReducers } from 'redux';

import leagues from './leagues';
import scores from './scores';

const rootReducer = combineReducers({
  scores,
  leagues
});

export default rootReducer;

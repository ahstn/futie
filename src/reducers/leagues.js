import { RECIEVE_LEAGUES, RECIEVE_LEAGUE_TABLE } from '../actions/leagues';

export default function leagues(state = {}, action) {
  switch (action.type) {
    case RECIEVE_LEAGUES:
      return action.leagues;
    case RECIEVE_LEAGUE_TABLE:
      return action.leagues;
    default:
      return state;
  }
}

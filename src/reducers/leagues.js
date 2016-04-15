import { RECIEVE_LEAGUES } from '../actions/leagues';

export default function leagues(state = {}, action) {
  switch (action.type) {
    case RECIEVE_LEAGUES:
      return action.leagues;
    default:
      return state;
  }
};

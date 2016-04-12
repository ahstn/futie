import { REQUEST_SCORES, RECIEVE_SCORES } from '../actions/scores';

function scores(state = {}, action) {
  switch (action.type) {
    case REQUEST_SCORES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECIEVE_SCORES:
      return Object.assign({}, state, {
        isFetching: false,
        scores: action.scores
      });
    default:
      return state;
  }

  return state;
};

export default function scoresByLeague(state = {}, action) {
  switch (action.type) {
    case REQUEST_SCORES:
    case RECIEVE_SCORES:
      return Object.assign({}, state, {
        [action.league]: scores(state[action.league], action),
      });
    default:
      return state;
  }
}

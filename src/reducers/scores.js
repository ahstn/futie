import { REQUEST_SCORES, RECEIVE_SCORES } from '../actions/scores';

function scores(state = {}, action) {
  switch (action.type) {
    case REQUEST_SCORES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_SCORES:
      return Object.assign({}, state, {
        isFetching: false,
        scores: action.scores
      });
    default:
      return state;
  }
}

export default function scoresByLeague(state = {}, action) {
  switch (action.type) {
    case REQUEST_SCORES:
    case RECEIVE_SCORES:
      return Object.assign({}, state, {
        [action.league]: scores(state[action.league], action)
      });
    default:
      return state;
  }
}

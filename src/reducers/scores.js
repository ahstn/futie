import { RECIEVE_SCORES } from '../actions/scores';

export default function scores(state = {}, action) {
  switch (action.type) {
    case RECIEVE_SCORES:
      return action.payload.scores;
      //return Object.assign({}, state, { scores: action.payload.scores });
    default:
      return state;
  }

  return state;
};

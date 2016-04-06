import { RECIEVE_SCORES } from '../actions/scores.js'

const initialState = {
  scores: []
}

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case RECIEVE_SCORES:
      return Object.assign({}, state, { scores: action.payload.scores });
    default:
      return state;
  }

  return state;
};

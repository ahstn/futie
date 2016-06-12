import { REQUEST_TEAM, RECEIVE_TEAM } from '../actions/teams';

export default function teams(state = {}, action) {
  switch (action.type) {
    case REQUEST_TEAM:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_TEAM:
      return action.teams;
    default:
      return state;
  }
}

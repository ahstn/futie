import { REQUEST_TEAM, RECEIVE_TEAM } from '../actions/teams';
import update from 'react-addons-update';

export function team(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TEAM:
      return { ...state, [action.home]: action.teams }
  }
}

export default function teams(state = {}, action) {
  switch (action.type) {
    case REQUEST_TEAM:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_TEAM:
      return { ...state, [action.id]: team(state[action.id], action)}
      //return { ...state, [action.id]: team(state[action.id], action)}
      /*return update(state, {
        [action.id]: {
          [action.home]: action.teams
        }
      });*/
    default:
      return state;
  }
}

import fetch from 'isomorphic-fetch';
import { UUID } from '../constants/config';

export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REQUEST_TEAM = 'REQUEST_TEAM';

export function requestTeam(teams = {}) {
  return {
    type: REQUEST_TEAM,
    teams
  };
}

export function receiveTeam(teams = {}, id, home) {
  return {
    type: RECEIVE_TEAM,
    teams,
    id,
    home
  };
}

export function fetchTeam(endpoint = '', id, home) {
  return dispatch => {
    return fetch(endpoint, { headers: { 'X-Auth-Token': UUID } })
      .then(response => response.json())
      .then(json => {
        dispatch(receiveTeam(json, id, home));
      });
  };
}

export function fetchTeamIfNeeded(endpoint) {
  return (dispatch, getState) => {
    if (shouldFetchTeam(getState(), endpoint)) {
      return dispatch(fetchTeam(endpoint));
    }
  };
}

function shouldFetchTeam(state, endpoint) {
  const team = state.asyncTeams[endpoint];
  if (!team) {
    return true;
  }
  if (team.isFetching) {
    return false;
  }
}

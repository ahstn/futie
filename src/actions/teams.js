import fetch from 'isomorphic-fetch';
import { UUID } from '../constants/config';

export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REQUEST_TEAM = 'REQUEST_TEAM';
const teams_endpoint = 'http://api.football-data.org/v1/teams/';

export function requestTeam(teams = {}) {
  return {
    type: REQUEST_TEAM,
    teams
  };
}

export function receiveTeam(teams = {}) {
  return {
    type: RECEIVE_TEAM,
    teams: teams
  };
}

export function fetchTeam(teamID) {
  return dispatch => {
    return fetch(teams_endpoint + teamID, { headers: { 'X-Auth-Token': UUID } })
      .then(response => response.json())
      .then(json => dispatch(receiveTeam(json)));
  };
}

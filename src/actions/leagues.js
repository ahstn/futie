import fetch from 'isomorphic-fetch';
import { UUID } from '../constants/config';

export const RECIEVE_LEAGUES = 'RECIEVE_LEAGUES';
export const RECIEVE_LEAGUE_TABLE = 'RECIEVE_LEAGUE_TABLE';
const leagues_endpoint = 'http://api.football-data.org/v1/soccerseasons/';

export function receiveLeagues(leagues = {}) {
  return {
    type: RECIEVE_LEAGUES,
    leagues: leagues
  };
}

export function receiveLeagueTable(leagues = {}) {
  return {
    type: RECIEVE_LEAGUE_TABLE,
    leagues: leagues
  };
}

export function fetchLeagues() {
  return dispatch => {
    return fetch(leagues_endpoint, { headers: { 'X-Auth-Token': UUID } })
      .then(response => response.json())
      .then(json => dispatch(receiveLeagues(json)));
  };
}

export function fetchLeagueTable(id) {
  return dispatch => {
    let endpoint = leagues_endpoint + id + '/leagueTable';
    return fetch(endpoint, { headers: { 'X-Auth-Token': UUID } })
      .then(response => response.json())
      .then(json => dispatch(receiveLeagueTable(json)));
  };
}

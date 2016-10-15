import fetch from 'isomorphic-fetch';
import leagueSchema from '../schemas/leagues';
import { arrayOf, normalize } from 'normalizr';
import { UUID } from '../constants/config';

export const RECIEVE_LEAGUES = 'RECIEVE_LEAGUES';
export const RECIEVE_LEAGUE_TABLE = 'RECIEVE_LEAGUE_TABLE';
const leagues_endpoint = 'http://api.football-data.org/v1/competitions/';

export function receiveLeagues(leagues = {}) {
  return {
    type: RECIEVE_LEAGUES,
    leagues
  };
}

export function receiveLeagueTable(leagues = {}) {
  return {
    type: RECIEVE_LEAGUE_TABLE,
    leagues
  };
}

export function fetchLeagues(id = '') {
  return dispatch => {
    return fetch(leagues_endpoint + id, { headers: { 'X-Auth-Token': UUID } })
      .then(response => response.json())
      .then(json => {
        const normalized = normalize(json, arrayOf(leagueSchema));
        dispatch(receiveLeagues(normalized.entities.leagues));
      });
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

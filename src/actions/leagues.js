import fetch from 'isomorphic-fetch';
import { UUID } from '../constants/config';

export const RECIEVE_LEAGUES = 'RECIEVE_LEAGUES';
const leagues_endpoint = 'http://api.football-data.org/v1/soccerseasons';

export function fetchLeagues() {
  return dispatch => {
    return fetch(leagues_endpoint, { headers: { 'X-Auth-Token': UUID }})
      .then(response => response.json())
      .then(json => dispatch(recieveLeagues(json)))
  }
}

export function recieveLeagues(leagues = {}) {
  return {
    type: RECIEVE_LEAGUES,
    payload: {
      leagues
    }
  };
}

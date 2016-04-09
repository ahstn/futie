import fetch from 'isomorphic-fetch';
import { UUID } from '../constants/config';

export const RECIEVE_LEAGUES = 'RECIEVE_LEAGUES';

export function fetchLeagues() {
  return function(dispatch, getState) {
    let state = getState();

    return fetch('http://api.football-data.org/v1/soccerseasons', {
      headers: {
        'X-Auth-Token': UUID
      }
    })
    .then(response => response.json())
    .then((json) => {
      dispatch(recieveLeagues(json));
    })
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

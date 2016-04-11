import fetch from 'isomorphic-fetch';
import { UUID } from '../constants/config';

export const RECIEVE_SCORES = 'RECIEVE_SCORES';

export function fetchScores(endpoint) {
  return dispatch => {
    return fetch(endpoint, { headers: { 'X-Auth-Token': UUID }})
      .then(response => response.json())
      .then(json => dispatch(recieveScores(json)))
  }
}

export function recieveScores(scores = {}) {
  return {
    type: RECIEVE_SCORES,
    payload: {
      scores
    }
  };
}

import fetch from 'isomorphic-fetch'
import { UUID } from '../constants/config'

export const RECIEVE_SCORES = 'RECIEVE_SCORES';

export function fetchScores() {
  return function(dispatch, getState) {
    let state = getState();

    // 398 = BPL, 32 = Current gameweek (01/04/16)
    return fetch('http://api.football-data.org/v1/soccerseasons/398/fixtures?matchday=32', {
      headers: {
        'X-Auth-Token': UUID
      }
    })
    .then(response => response.json())
    .then((json) => {
      dispatch(recieveScores(json));
    })
  }
}

export function recieveScores(scores) {
  return {
    type: RECIEVE_SCORES,
    payload: {
      scores
    }
  }
}


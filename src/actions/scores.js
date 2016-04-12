import fetch from 'isomorphic-fetch';
import { UUID } from '../constants/config';

export const REQUEST_SCORES = 'REQUEST_SCORES';
export const RECIEVE_SCORES = 'RECIEVE_SCORES';

export function requestScores(league) {
  return {
    type: REQUEST_SCORES,
    league
  }
}

export function recieveScores(scores = {}, league) {
  return {
    type: RECIEVE_SCORES,
    league: league,
    scores: scores
  };
}

export function fetchScores(league, endpoint) {
  return dispatch => {
    console.log(league);
    dispatch(requestScores(league))
    return fetch(endpoint, { headers: { 'X-Auth-Token': UUID }})
      .then(response => response.json())
      .then(json => dispatch(recieveScores(json, league)))
  }
}

export function fetchScoresIfNeeded(league, endpoint) {
  return (dispatch, getState) => {
    if (shouldFetchScores(getState(), league)) {
      return dispatch(fetchScores(league, endpoint))
    }
  }
}

function shouldFetchScores(state, league) {
  const scores = state.scoresByLeague[league];
  if (!scores) {
    return true;
  }
  if (scores.isFetching) {
    return false
  }
}

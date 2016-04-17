import fetch from 'isomorphic-fetch';
import { UUID } from '../constants/config';

export const REQUEST_SCORES = 'REQUEST_SCORES';
export const RECEIVE_SCORES = 'RECEIVE_SCORES';

export function requestScores(league) {
  return {
    type: REQUEST_SCORES,
    league
  }
}

export function receiveScores(scores = {}, league) {
  return {
    type: RECEIVE_SCORES,
    league: league,
    scores: scores
  };
}

export function fetchScores(league, endpoint) {
  return dispatch => {
    dispatch(requestScores(league));
    return fetch(endpoint, { headers: { 'X-Auth-Token': UUID }})
      .then(response => response.json())
      .then(json => dispatch(receiveScores(json, league)))
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

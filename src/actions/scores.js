import fetch from 'isomorphic-fetch'
import { UUID } from '../constants/config'

export const RECIEVE_SCORES = 'RECIEVE_SCORES';

// Dummy test data
const initalScores = {
    count: 2,
    fixtures: [
      {
        id: 146793,

        soccerseasonId: 398,
        date: "2016-04-02T11:45:00Z",
        status: "FINISHED",
        matchday: 32,
        homeTeamName: "Aston Villa FC",
        homeTeamId: 58,
        awayTeamName: "Chelsea FC",
        awayTeamId: 61,
        result: {
            "goalsHomeTeam": 0,
            "goalsAwayTeam": 4
        }
      },
      {
        "id": 146795,
        "soccerseasonId": 398,
        "date": "2016-04-02T16:30:00Z",
        "status": "FINISHED",
        "matchday": 32,
        "homeTeamName": "Liverpool FC",
        "homeTeamId": 64,
        "awayTeamName": "Tottenham Hotspur FC",
        "awayTeamId": 73,
        "result": {
            "goalsHomeTeam": 1,
            "goalsAwayTeam": 1
        }
      }
    ]
};

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

export function recieveScores(scores = initalScores) {
  return {
    type: RECIEVE_SCORES,
    payload: {
      scores
    }
  };
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/lib/avatar';

import { fetchScoresIfNeeded } from '../actions/scores';
import scss from '../static/styles/ScoreList.scss';

class ScoreList extends Component {
  constructor(props) {
    super(props);

    this.handleMatchStatus = this.handleMatchStatus.bind(this);
  }

  componentDidMount() {
    const { dispatch, leagueID, gameweek, endpoint } = this.props;

    dispatch(fetchScoresIfNeeded(leagueID, endpoint + '/?matchday=' + gameweek));
  }

  handleMatchStatus(score) {
    let score_time = '00:00';
    if (score.status == 'FINISHED') {
      score_time = [
        score.result.goalsHomeTeam,
        ' - ',
        score.result.goalsAwayTeam
      ].join('');
    }
    else {
      // 11 Time start index, 16 Time end index. Make this dynamic later
      score_time = score.date.substring(11, 16);
    }
    return score_time;
  }

  render() {
    const { scoresByLeague, leagueID } = this.props;
    const { scores } = scoresByLeague[leagueID] || { isFetching: true, scores: {} };
    if (!scores || !scores.fixtures) { return null; }

    return (
      <ul>
        { scores.fixtures.map((score, key) =>
          <li key={ key }>
            <Avatar src='http://lorempixel.com/100/100/nature' />
            <span className='team'>{ score.homeTeamName }</span>
            <span className='score'>{ this.handleMatchStatus(score) }</span>
            <span className='team'>{ score.awayTeamName }</span>
            <Avatar src='http://lorempixel.com/100/100/nature' />
          </li>
        )}
      </ul>
    )
  }
}

ScoreList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  leagueID: PropTypes.number,
  endpoint: PropTypes.string,
  gameweek: PropTypes.number
};

function mapStateToProps(state) {
  const { scoresByLeague } = state;

  return { scoresByLeague };
}

export default connect(mapStateToProps)(ScoreList);

import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/lib/avatar';

import scss from '../static/styles/ScoreList.scss';

class ScoreList extends React.Component {
  constructor(props) {
    super(props);
    this.handleMatchStatus = this.handleMatchStatus.bind(this);
  }

  handleMatchStatus(score) {
    let score_time = '00:00'
    if (score.status == 'FINISHED') {
      score_time = [
        score.result.goalsHomeTeam,
        ' - ',
        score.result.goalsAwayTeam
      ].join('');
    }
    else {
      // 11 Time start index, 16 Time end index. Make this dynamic later
      score_time - score.date.substring(11, 16);
    }
    return score_time;
  }

  render() {
    const { scores } = this.props;

    if (!scores.fixtures) { return null; }

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

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ScoreList);

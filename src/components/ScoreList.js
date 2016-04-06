import React from 'react'
import { connect } from 'react-redux'

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
    return (
      <ul>
        { scores.map(score =>
          <li>
            <span>{ score.homeTeamName } { this.handleMatchStatus(score) } { score.awayTeamName }</span>
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

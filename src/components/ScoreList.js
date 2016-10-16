import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/lib/avatar';

import Team from './Team';
import { fetchScoresIfNeeded } from '../actions/scores';
import '../static/styles/ScoreList.scss';

class ScoreList extends Component {
  constructor(props) {
    super(props);

    this.handleMatchStatus = this.handleMatchStatus.bind(this);
  }

  componentDidMount() {
    const { dispatch, entityID, refine, endpoint } = this.props;

    dispatch(fetchScoresIfNeeded(entityID, endpoint + (refine || '')));
  }

  handleMatchStatus(score) {
    let score_time = '00:00';
    if (score.status === 'FINISHED') {
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
    const { scoresByLeague, entityID } = this.props;
    const { scores } = scoresByLeague[entityID] || { isFetching: true, scores: {} };
    if (!scores || !scores.fixtures) { return null; }

    return (
      <ul>
        { scores.fixtures.map((score, key) =>
          <li key={ key }>
            <Team endpoint={ score._links.homeTeam.href } id={ key } home='home' />
            <span className='score'>{ this.handleMatchStatus(score) }</span>
            <Team endpoint={ score._links.awayTeam.href } id={ key } home='away' />
          </li>
        )}
      </ul>
    );
  }
}

ScoreList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  entityID: PropTypes.number,
  endpoint: PropTypes.string,
  refine: PropTypes.string
};

const mapStateToProps = state => {
  const { scoresByLeague } = state;

  return { scoresByLeague };
}

export default connect(mapStateToProps)(ScoreList);

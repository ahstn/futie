import React from 'react'
import { connect } from 'react-redux'

class ScoreList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { scores } = this.props;

    return (
      <ul>
        { scores.map(score =>
          <li>
            <span>{ score.homeTeamName } v { score.awayTeamName }</span>
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

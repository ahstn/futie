import React from 'react'
import { connect } from 'react-redux'
import { recieveScores } from '../actions/scores.js'
import ScoreList from '../components/ScoreList'

class LiveScores extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(recieveScores());
  }

  render() {
    const { dispatch, scores } = this.props;
    
    return (
      <div>
        <ScoreList scores={scores} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { scores } = state;
  return { scores };
}

export default connect(mapStateToProps)(LiveScores);

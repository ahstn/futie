import React from 'react'
import { connect } from 'react-redux'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';


import { recieveScores, fetchScores } from '../actions/scores.js'
import ScoreList from '../components/ScoreList'

class LiveScores extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchScores());
  }

  render() {
    const { dispatch, scores } = this.props;
    console.log(scores);

    return (
      <div>
        <Card>
          <CardHeader
            title="League"
            subtitle="Nation"
            avatar="http://lorempixel.com/100/100/sports/"
          />
          <CardText>
            <ScoreList scores={scores} />
          </CardText>
          <CardActions>
          </CardActions>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { scores } = state;
  return { scores };
}

export default connect(mapStateToProps)(LiveScores);

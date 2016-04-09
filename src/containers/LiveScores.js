import React from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import { fetchScores } from '../actions/scores';
import { fetchLeagues } from '../actions/leagues';
import ScoreList from '../components/ScoreList';

class LiveScores extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchScores());
    dispatch(fetchLeagues());
  }

  render() {
    const { dispatch, scores, leagues } = this.props;

    return (
      <div>
        <Card>
          <CardHeader
            title='League'
            subtitle='Nation'
            avatar='http://lorempixel.com/100/100/sports/'
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
  const { scores, leagues } = state;
  return { scores, leagues };
}

export default connect(mapStateToProps)(LiveScores);

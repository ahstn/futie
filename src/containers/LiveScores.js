import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import { fetchLeagues } from '../actions/leagues';
import ScoreList from '../components/ScoreList';
import scss from '../static/styles/card.scss';

class LiveScores extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchLeagues());
  }

  render() {
    const { leagues } = this.props;
    if (leagues.length < 1) { return null; }
    console.log(leagues);
    return (
      <div className="wrapper-child live-scores">
        { Object.keys(leagues).map( key =>
          <Card className='card-scores' key={ leagues[key].id }>
            <CardHeader
              title={ leagues[key].caption }
              subtitle={ 'Gameweek ' +  leagues[key].currentMatchday }
              avatar='http://lorempixel.com/100/100/sports/'
            />
            <CardText>
              <ScoreList
                entityID={ leagues[key].id }
                endpoint={ leagues[key]._links.fixtures.href }
                refine={ '?matchday=' + leagues[key].currentMatchday } />
            </CardText>
          </Card>
        )}
      </div>
    );
  }
}

function filterLeagues(value) {
  console.log(value);
  return value === 426 || value === 427 || value === 436;
}

const mapStateToProps = state => {
  const { leagues } = state;
  return { leagues };
}

export default connect(mapStateToProps)(LiveScores);

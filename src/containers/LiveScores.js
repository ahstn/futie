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
    if (!leagues || !leagues.filter) { return null; }

    return (
      <div className="wrapper-child">
        { leagues.filter(filterLeagues).map( league =>
          <Card className='card-scores' key={ league.id }>
            <CardHeader
              title={ league.caption }
              subtitle={ 'Gameweek ' +  league.currentMatchday }
              avatar='http://lorempixel.com/100/100/sports/'
            />
            <CardText>
              <ScoreList
                leagueID={ league.id }
                gameweek={ league.currentMatchday }
                endpoint={ league._links.fixtures.href } />
            </CardText>
          </Card>
        )}
      </div>
    );
  }
}

function filterLeagues(value) {
    return value.id === 398 || value.id === 394 || value.id === 399;
}

function mapStateToProps(state) {
  const { leagues } = state;
  return { leagues };
}

export default connect(mapStateToProps)(LiveScores);

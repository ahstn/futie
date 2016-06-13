import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import ScoreList from '../components/ScoreList';
import { fetchLeagues } from '../actions/leagues';

class Euros extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { id } = this.props.routeParams;

    dispatch(fetchLeagues(id));
  }

  render() {
    const { leagues } = this.props;
    if (!leagues || !leagues._links ) { return null; }

    return (
      <Card className='full-width'>
        <CardHeader
          title={ leagues.caption }
          subtitle={ 'Gameweek ' + leagues.currentMatchday } />
        <CardText>
          <ScoreList
            entityID={ leagues.id }
            endpoint={ leagues._links.fixtures.href } />
        </CardText>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const { leagues } = state;
  return { leagues };
}

export default connect(mapStateToProps)(Euros);

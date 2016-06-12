import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import { fetchTeam } from '../actions/teams';

class Team extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { id } = this.props.routeParams;

    dispatch(fetchTeam(id));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.routeParams.id !== this.props.routeParams.id) {
      const { dispatch } = nextProps;
      const { id } = nextProps.routeParams;

      dispatch(fetchTeam(id));
    }
  }

  render() {
    const { teams } = this.props;
    if (!teams || !teams.shortName) { return null; }

    return (
      <Card>
        <CardHeader title={ teams.name } subtitle={ teams.code } />
        <CardText>
          Squad Value: { teams.squadMarketValue }
        </CardText>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const { teams } = state;
  return { teams };
}

export default connect(mapStateToProps)(Team);

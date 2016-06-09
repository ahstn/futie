import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLeagueTable } from '../actions/leagues';

class LeagueTables extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { id } = this.props.routeParams;

    dispatch(fetchLeagueTable(id));
  }

  render() {
    const { leagues } = this.props;
    return (
      <div>
        <h2>Hi { leagues.leagueCaption }</h2>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { leagues } = state;
  return { leagues };
}

export default connect(mapStateToProps)(LeagueTables);

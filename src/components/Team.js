import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import Avatar from 'material-ui/lib/avatar';

import { fetchTeam } from '../actions/teams';

class Team extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, endpoint, id, home } = this.props;
    dispatch(fetchTeam(endpoint, id, home));
  }

  render() {
    const { teams, id, home } = this.props;

    return (
      <div>
        { teams[id] && teams[id][home] && <span className='team'>{ teams[id][home].name }</span> }
        { teams[id] && teams[id][home] && <Avatar src={ teams[id][home].crestUrl } /> }
      </div>
    )
  }
}

Team.propTypes = {
  teamID: PropTypes.number
}

const mapStateToProps = state => {
  const { teams, id, home } = state;

  return { teams };
}

export default connect(mapStateToProps)(Team);

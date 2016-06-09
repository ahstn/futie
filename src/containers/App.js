import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from '../components/appbar/AppBar';
import SideBar from '../components/sidebar/SideBar';
import SideBarItem from '../components/sidebar/SideBarItem.js';
import LiveScores from '../containers/LiveScores';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { open: true };

    // Components using ES6 classes don't autobind 'this' to non React methods
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <AppBar
          title='Futie'
          icon='menu'
          onLeftIconButtonTouchTap={ this.handleToggle } />
        <SideBar open={ this.state.open }>
          <SideBarItem title='Leagues' icon='star' route=''>
            <SideBarItem title='Premier League' icon='dashboard' route='/tables/398' />
            <SideBarItem title='Bundesliga' icon='dashboard' route='/tables/394' />
          </SideBarItem>
        </SideBar>
        <div className='wrapper'>
           { this.props.children || <LiveScores /> }
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return { };
}

export default connect(mapStateToProps)(App);

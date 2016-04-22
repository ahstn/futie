import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

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
    this.setState({ open: !this.state.open })
  }

  render() {
    const { scores } = this.props;

    return (
      <div>
        <AppBar
          title='Futie'
          icon='menu'
          onLeftIconButtonTouchTap={this.handleToggle}/>
        <SideBar open={this.state.open}>
          <SideBarItem title='Leagues' icon='star'>
            <SideBarItem title='Premier League' icon='dashboard' />
            <SideBarItem title='Bundesliga' icon='dashboard' />
          </SideBarItem>
          <MenuItem onTouchTap={this.handleToggle}>Players</MenuItem>
          <MenuItem onTouchTap={this.handleToggle}>Settings</MenuItem>
        </SideBar>
        <div className='wrapper'>
          <LiveScores />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { };
}

export default connect(mapStateToProps)(App);

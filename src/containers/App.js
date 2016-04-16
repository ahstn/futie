import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

import AppBar from '../components/appbar/AppBar';
import SideBar from '../components/sidebar/SideBar';
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
          <MenuItem onTouchTap={this.handleToggle}>Leagues</MenuItem>
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

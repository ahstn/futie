import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

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
          className='appbar'
          title='Futie'
          onLeftIconButtonTouchTap={this.handleToggle}
          iconClassNameRight='muidocs-icon-navigation-expand-more'
        />
      <LeftNav
        docked={true}
        open={this.state.open}>
          <MenuItem onTouchTap={this.handleToggle}>Leagues</MenuItem>
          <MenuItem onTouchTap={this.handleToggle}>Players</MenuItem>
          <MenuItem onTouchTap={this.handleToggle}>Settings</MenuItem>
        </LeftNav>
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

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

//import scss from 'static/styles/base.scss'; Add scss loader

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };

    // Components using ES6 classes don't autobind 'this' to non React methods
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div>
        <AppBar
          title="Futie"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconClassNameRight='muidocs-icon-navigation-expand-more'
        />
        <LeftNav open={this.state.open}>
          <MenuItem onTouchTap={this.handleToggle}>Leagues</MenuItem>
          <MenuItem onTouchTap={this.handleToggle}>Players</MenuItem>
          <MenuItem onTouchTap={this.handleToggle}>Settings</MenuItem>
        </LeftNav>
      </div>
    )
  }
}

export default App;

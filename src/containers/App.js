import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from '../components/appbar/AppBar';
import AppBarItem from '../components/appbar/AppBarItem';
import SideBar from '../components/sidebar/SideBar';
import SideBarHeader from '../components/sidebar/SideBarHeader';
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
          onLeftIconButtonTouchTap={ this.handleToggle }>
          <AppBarItem title='Search' icon='search' />
          <AppBarItem icon='settings' />
          <AppBarItem icon='more_vert' />
        </AppBar>
        <SideBar open={ this.state.open }>
          <SideBarItem title='Scores' icon='home' route='/' />
          <SideBarItem title='Leagues' icon='star' route=''>
            <SideBarItem title='Premier League' route='/tables/398' />
            <SideBarItem title='La Liga' route='/tables/399' />
            <SideBarItem title='Bundesliga' route='/tables/394' />
            <SideBarItem title='Ligue 1' route='/tables/396' />
            <SideBarItem title='Serie A' route='/tables/401' />
          </SideBarItem>
          <SideBarItem title='Teams'>
            <SideBarItem title='Liverpool FC' route='/team/64' />
            <SideBarItem title='Manchester Utd' route='/team/66' />
            <SideBarItem title='Arsenal FC' route='/team/57' />
            <SideBarItem title='Chelsea FC' route='/team/61' />
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

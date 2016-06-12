import React, { Component, PropTypes } from 'react';

import scss from '../../static/styles/appbar.scss';

class AppBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, icon, children } = this.props;

    return (
      <header className='appbar'>
        <div className='appbar-nav-button'>
          <i className='material-icons'>{ icon }</i>
        </div>
        <div className='appbar-title'>
          <h1>{ title}</h1>
        </div>
        { children }
      </header>
    );
  }
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default AppBar;

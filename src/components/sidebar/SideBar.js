import React, { Component, PropTypes } from 'react';

import scss from '../../static/styles/sidebar.scss';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, children } = this.props;

    return (
      <aside className="sidebar">
        { children }
      </aside>
    );
  }
}

SideBar.propTypes = {
  open: PropTypes.bool
};

export default SideBar;

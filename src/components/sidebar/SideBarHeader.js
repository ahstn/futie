import React, { Component, PropTypes } from 'react';

import avatar_default from '../../static/images/avatar_default.png';

class SideBarHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, logo, avatar } = this.props;

    if (user) {
      return (
        <header>
          <div className="user">
            <img src={ avatar || avatar_default } width="50px" />
            <h1> name </h1>
            <h2> email </h2>
          </div>
        </header>
      );
    } else if (logo) {
      return (
        <header>
          <img className='logo' src={ logo } width='200px' />
        </header>
      );
    }
  }
}

SideBarHeader.propTypes = {
  user: PropTypes.boolean,
  name: PropTypes.string,
  email: PropTypes.string,
  logo: PropTypes.node,
  avatar: PropTypes.node
};

SidebarHeader.defaultProps = {
  user: false
};

export default SideBarHeader;

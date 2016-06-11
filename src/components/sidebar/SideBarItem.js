import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SideBarItem extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { title, icon, route, children } = this.props;
    const { open } = this.state;

    if (route) {
      return (
        <div className='sidebar-item'>
          <Link to={ route }>
            <i className="material-icons">{ icon }</i>
            { title }
          </Link>
        </div>
      );
    } else {
      return (
        <div className='sidebar-item'>
          <a a onClick={ this.handleClick }>
            <i className="material-icons">{ icon }</i>
            { title }
            { children &&
              <i className='material-icons'>arrow_drop_down</i> }
          </a>
          { open && children }
        </div>
      );
    }
  }
}

SideBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  route: PropTypes.string
};

export default SideBarItem;

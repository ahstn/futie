import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SideBarItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ open: false });
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { title, icon, route, children } = this.props;
    const { open } = this.state;
    //const link_param = route ? 'to={ route }' : 'onClick={ this.handleClick }';
    //let sb_class = open ? 'sidebar-item' : 'sidebar-item_open';
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

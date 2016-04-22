import React, { Component, PropTypes } from 'react';

class SideBarItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ open: false });
  }

  handleClick() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { title, icon, children } = this.props;
    const { open } = this.state;
    //let sb_class = open ? 'sidebar-item' : 'sidebar-item_open';

    return (
      <div className='sidebar-item'>
        <a onClick={ this.handleClick }>
          <i className="material-icons">{ icon }</i>
          { title }
          { children &&
            <i className='material-icons'>arrow_drop_down</i>
          }
        </a>
        { open && children }
      </div>
    );
  }
}

SideBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default SideBarItem;

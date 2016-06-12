import React, { Component, PropTypes } from 'react';

class AppBarItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, icon } = this.props;

    return (
      <div className='appbar-item'>
        <i className='material-icons'>{ icon }</i>
        { title && title}
      </div>
    );
  }
}

AppBarItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string.isRequired,
  desc: PropTypes.string
};

export default AppBarItem;

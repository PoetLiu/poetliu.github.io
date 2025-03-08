import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Header(props) {
  const { id, title } = props;
  return <div className="header" id={id}>{title}</div>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

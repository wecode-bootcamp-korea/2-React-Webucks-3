import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterMenuContent extends Component {
  render() {
    return (
      <li className="footer-menu-content">
        <Link to="#">{this.props.content}</Link>
      </li>
    );
  }
}

export default FooterMenuContent;

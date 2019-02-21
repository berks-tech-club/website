import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes.js';

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="blue" role="navigation">
          <div className="nav-wrapper container">
            <ul className="desktop right hide-on-mad-and-down">
            <li><Link to={ROUTES.HOME} className="white-text">Home</Link></li>
            <li><Link to={ROUTES.ADMIN} className="white-text">Admin</Link></li>
            <li><Link to={ROUTES.ACCOUNT} className="white-text">Account</Link></li>
            <li><Link to={ROUTES.SIGN_OUT} className="white-text" id="btnLogout">Sign Out</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navigation

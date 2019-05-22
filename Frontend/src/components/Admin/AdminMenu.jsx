import React from 'react';
import { Link } from '../Menu/Link';
import { withRouter } from 'react-router';

const AdminMenu = ({ match: { path } }) => (
  <nav id="admin-menu">
    <ul className="links-wrap">
      <li className="link-wrap">
        <Link to={`${path}/news`} label="новини" />
      </li>
      <li className="link-wrap">
        <Link to={`${path}/donors`} label="донори" />
      </li>
    </ul>
  </nav>
);

export default withRouter(AdminMenu);
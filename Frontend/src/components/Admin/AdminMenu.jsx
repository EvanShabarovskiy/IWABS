import React from 'react';
import { Link } from '../Menu/Link';
import { withRouter } from 'react-router';

const AdminMenu = ({ match: { path } }) => (
  <nav id="admin-menu">
    <ul>
      <li>
        <Link to={`${path}/donors`} label="донори" />
      </li>
      <li>
        <Link to={`${path}/news`} label="новини" />
      </li>
    </ul>
  </nav>
);

export default withRouter(AdminMenu);
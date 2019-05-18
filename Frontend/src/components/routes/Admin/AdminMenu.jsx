import * as React from 'react';
import { Link } from '../../Menu/Link';
import { StatelessComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

const AdminMenu: StatelessComponent<RouteComponentProps> = ({ match }) => {
  return (
    <nav id="admin-menu">
      <ul>
        <li>
          <Link to={`${match.path}/donors`} label="донори" />
        </li>
        <li>
          <Link to={`${match.path}/news`} label="новини" />
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(AdminMenu);
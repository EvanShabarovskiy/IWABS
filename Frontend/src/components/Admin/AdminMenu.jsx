import React from 'react';
import { Link } from '../_General/Link';
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
      <li className="link-wrap">
        <Link to={`${path}/documents`} label="документи" />
      </li>
      <li className="link-wrap">
        <Link to={`${path}/medicine`} label="ліки" />
      </li>
      <li className="link-wrap">
        <Link to={`${path}/gallery`} label="фотогалерея" />
      </li>
    </ul>
  </nav>
);

export default withRouter(AdminMenu);
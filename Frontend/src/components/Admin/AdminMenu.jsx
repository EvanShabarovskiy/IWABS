import React from 'react';
import { Link } from '../_General/Link';
import { withRouter } from 'react-router';
import Menu from '../_General/Menu';

const AdminMenu = ({ match: { path } }) => (
  <Menu menuId="admin-menu">
    <Link to={`${path}/news`} label="новини" />
    <Link to={`${path}/donors`} label="донори" />
    <Link to={`${path}/documents`} label="документи" />
    <Link to={`${path}/medicine`} label="ліки" />
    <Link to={`${path}/gallery`} label="фотогалерея" />
  </Menu>
);

export default withRouter(AdminMenu);
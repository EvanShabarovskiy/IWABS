import React from 'react';

import { Link } from '../_General/Link';
import Flag from './Flag';
import { links } from '../../assets/constants/data/links';
import Menu from '../_General/Menu';

export const MainMenu = () => (
  <Menu menuId="main-menu">
    <Flag />
    {links.map(({ to, active, label }, i) => (
      <Link key={i} active={active} to={to} label={label} />
    ))}
  </Menu>
);

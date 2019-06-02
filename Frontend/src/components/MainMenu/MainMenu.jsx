import React from 'react';

import { Link } from '../_General/Link';
import Flag from './Flag';
import links from '../../assets/data/links';
import Menu from '../_General/Menu';

export const MainMenu = () => (
  <Menu menuId="main-menu">
    <Flag />
    { links.map(link=> <Link key={link.to} {...link} />) }
  </Menu>
);

import React from 'react';

import { Link } from '../_General/Link';
import Flag from './Flag';
import { links } from '../../assets/constants/data/links';

export const Menu = () => (
  <nav id="main-menu" className="menu">
    <Flag />
    <ul id="main-menu-links-wrap">
      {links.map(({ to, active, label }, i) => (
        <li key={i} className="link-wrap">
          <Link active={active} to={to} label={label} />
        </li>
      ))}
    </ul>
  </nav>
);

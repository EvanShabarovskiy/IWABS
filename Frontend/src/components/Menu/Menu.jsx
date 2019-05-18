import React from 'react';
import { Link } from './Link';
import Flag from './Flag';
import { menu_items } from '../../assets/constants/menu_items';

export const Menu = () => (
  <nav id="main-menu" className="menu">
    <Flag />
    <ul id="main-menu-links-wrap">
      {menu_items.map(({ to, active, label }, i) => (
        <li key={i} className="link-wrap">
          <Link active={active} to={to} label={label} />
        </li>
      ))}
    </ul>
  </nav>
);

import * as React from 'react';
import { Link } from './Link';
import Flag from './Flag';

const Menu = () => {
  return (
    <nav id="main-menu" className="menu">
      <Flag />
      <ul id="main-menu-links-wrap">
        <li className="link-wrap">
          <Link active to="/" label="головна" />
        </li>
        <li className="link-wrap">
          <Link active to="/documents" label="документи" />
        </li>
        <li className="link-wrap">
          <Link to="/for-donors" label="для донорів" />
        </li>
        <li className="link-wrap">
          <Link to="/medicine" label="ліки" />
        </li>
        <li className="link-wrap">
          <Link to="/news" label="новини" />
        </li>
        <li className="link-wrap">
          <Link to="/photos" label="фотогалерея" />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

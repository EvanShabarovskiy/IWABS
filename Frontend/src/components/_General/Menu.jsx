import React from 'react';

const Menu = ({ menuId, children }) => (
  <nav id={menuId} className="menu">
    <ul className="links-wrap">
      {children}
    </ul>
  </nav>
);

export default Menu;
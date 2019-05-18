import React from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import cx from 'classnames';

export const Link = ({ to, active, label }) => (
  <Route
    path={to}
    exact={active}
    children={({ match }) => (
      <RouterLink className={cx('link', !!match && 'active')} to={to}>
        {label}
      </RouterLink>
    )}
  />
);

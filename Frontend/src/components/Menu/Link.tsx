import * as React from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import { StatelessComponent } from 'react';
import cx from 'classnames';

import { ILinkProps } from '../../interfaces/ILinkProps';

export const Link: StatelessComponent<ILinkProps> = ({ to, active, label }) => (
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
import { StatelessComponent } from 'react';

export interface IRoute {
  exact: boolean;
  path: string;
  component: StatelessComponent;
}

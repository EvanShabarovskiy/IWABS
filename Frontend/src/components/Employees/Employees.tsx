import * as React from 'react';
import { StatelessComponent } from 'react';

export const Employees: StatelessComponent = ({ children }) => (
  <section className="section employees">
    <h1 className="section-title">наші працівники</h1>
    {children}
  </section>
);

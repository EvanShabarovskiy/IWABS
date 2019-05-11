import * as React from 'react';
import { StatelessComponent } from 'react';
import { IEmployee } from '../../../interfaces/IEmployee';

export const Employee: StatelessComponent<IEmployee> = ({
  position,
  fullName,
  phone
}) => (
  <div className="employee">
    <h5 className="position">{position}</h5>
    <p className="full-name">{fullName}</p>
    <p className="phone">тел. {phone}</p>
  </div>
);

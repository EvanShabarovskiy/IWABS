import React from 'react';

export const Employee = ({ position, fullName, phone }) => (
  <div className="employee">
    <h5 className="position">{position}</h5>
    <p className="full-name">{fullName}</p>
    <p className="phone">
      тел. <span className="number">{phone}</span>{' '}
    </p>
  </div>
);

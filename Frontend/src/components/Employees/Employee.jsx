import React from 'react';
import { Icon } from 'antd';

export const Employee = ({ position, fullName, phone }) => (
  <div className="employee">
    <h3 className="full-name">{fullName}</h3>
    <p className="position">{position}</p>
    <p className="phone">
      <Icon type="phone" className="phone-icon" />
      <span className="number">{phone}</span>
    </p>
  </div>
);

import React from 'react';
import { Icon } from 'antd';

const Employee = ({ position, fullName, phone }) =>
  <div className="employee">
    <h3 className="full-name">{fullName}</h3>
    <p className="position">{position}</p>
    <p className="phone">
      <Icon type="phone" theme="filled" className="phone-icon icon" />
      <span className="number">{phone}</span>
    </p>
  </div>

export default Employee;

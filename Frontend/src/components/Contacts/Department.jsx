import React from 'react';
import { Icon } from 'antd';

const Department = ({ name, mobile, stationary }) => 
  <div className="department">
    <p className="department-name">{name}</p>
    <span className="department-number department-number-mobile">
      <i className="fas fa-mobile-alt number-icon"></i>
      <span className="number">{mobile}</span>
    </span>
    <span className="department-number department-number-stationary">
      <Icon type="phone" theme="filled" className="number-icon" />
      <span className="number">{stationary}</span>
    </span>
  </div>

export default Department;
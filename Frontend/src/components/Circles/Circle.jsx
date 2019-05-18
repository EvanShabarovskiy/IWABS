import React from 'react';

const Circle = ({ iconClass, title, value }) => (
  <div className="circle">
    <i className={iconClass} />
    <h5 className="circle-title">{title}</h5>
    <span className="circle-value number ">{value}</span>
  </div>
);

export default Circle;

import React from 'react';

const Circle = ({ iconClass, title, value }) => (
  <div className="achievement">
    <i className={iconClass} />
    <h5 className="achievement-title">{title}</h5>
    <span className="achievement-value number ">{value}</span>
  </div>
);

export default Circle;

import React from 'react';

const Achievement = ({ iconClass, title, value }) =>
  <div className="achievement">
    <div className="icon-wrap">
      <i className={`${iconClass} achievement-icon`} />
    </div>
    <h5 className="achievement-title">{title}</h5>
    <span className="achievement-value">{value}</span>
  </div>

export default Achievement;

import React from 'react';

const Field = ({ name, value, placeholder, change }) => (
  <label htmlFor={`id-${name}`} className="field">
    <span className="field-title">{placeholder}</span>
    <input
      id={`id-${name}`}
      name={name}
      value={value}
      type="text"
      className="input"
      onChange={change}
    />
  </label>
);

export default Field;

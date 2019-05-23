import React from 'react';

const Field = ({ name, value, placeholder, change, isTextarea }) => (
  <label htmlFor={`id-${name}`} className="field">
    <span className="field-title">{placeholder}</span>
    {isTextarea ? 
      <textarea
        id={`id-${name}`}
        name={name}
        value={value}
        type="text"
        className="input textarea"
        onChange={change}
      /> :
      <input
        id={`id-${name}`}
        name={name}
        value={value}
        type="text"
        className="input"
        onChange={change}
      />
    }
  </label>
);

Field.defaultProps = {
  isTextarea: false
}

export default Field;

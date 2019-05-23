import React from 'react';

const Field = ({ name, value, placeholder, type, change, isTextarea }) => (
  <label htmlFor={`id-${name}`} className={`field ${name}-field`}>
    <span className="field-title">{placeholder}</span>
    {isTextarea ? 
      <textarea
        id={`id-${name}`}
        name={name}
        value={value}
        className="input textarea"
        onChange={change}
      /> :
      <input
        id={`id-${name}`}
        name={name}
        value={value}
        type={type}
        className="input"
        onChange={change}
        autoComplete="off"
      />
    }
  </label>
);

Field.defaultProps = {
  isTextarea: false,
  type: 'text'
}

export default Field;

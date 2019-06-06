import React from 'react';
import cx from 'classnames'

const Field = ({ name, value, placeholder, type, change, isTextarea, error }) => (
  <label htmlFor={`id-${name}`} className={cx('field', `${name}-field`, error && 'error')}>
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
    { error && <span className="field-error-text"> {error} </span> }
  </label>
);

Field.defaultProps = {
  isTextarea: false,
  type: 'text'
}

export default Field;

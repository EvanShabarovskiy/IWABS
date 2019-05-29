import React from 'react';
import cx from 'classnames';

const Form = ({ formClass, onSubmit, children, buttonText, title }) => (
  <form 
    className={cx('grid', 'form', !!formClass && formClass)} 
    onSubmit={onSubmit}
  >
    <h1 className={cx('form-title', !!formClass && `${formClass}-title`)}>{title}</h1>
    {children}
    <button 
      type="submit" 
      className={cx('btn', 'sub-btn', !!formClass && `${formClass}-btn`)}
    >
      {buttonText}
    </button>
  </form>
);

export default Form;
import React from 'react';
import Field from '../_General/Field';
import withForm from '../withForm';

const ContactUsForm = ({ onSubmit, data: { name, email, message }, setValue }) => {
  return (
    <form className="form contact-us-form" onSubmit={onSubmit}>
      <Field name="name" value={name} placeholder="повне ім'я" change={setValue} />
      <Field name="email" value={email} placeholder="електронна пошта" change={setValue} />
      <Field name="message" value={message} placeholder="повідомлення" change={setValue} />
      <button className="btn sub-btn">відправити повідомлення</button>
    </form>
  );
};

const initialState = {
  name: '', 
  email: '', 
  message: '' 
}

export default withForm(initialState, initialState)(ContactUsForm);
import React from 'react';
import Field from '../_General/Field';

const ContactUsForm = ({ onSubmit, data: { name, subject, email, message }, change }) => (
  <form className="form contact-us-form" onSubmit={onSubmit}>
    <Field name="name" value={name} placeholder="повне ім'я" change={change} />
    <Field name="subject" value={subject} placeholder="тема повідомлення" change={change} />
    <Field name="email" value={email} placeholder="електронна пошта" change={change} />
    <Field isTextarea name="message" value={message} placeholder="повідомлення" change={change} />
    <button className="btn sub-btn">відправити повідомлення</button>
  </form>
);

export default ContactUsForm;
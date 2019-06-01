import React from 'react';
import Field from '../_General/Field';
import Form from '../_General/Form';

const ContactUs = ({ onSubmit, name, subject, email, message, change }) => (
  <Form formClass="contact-us-form" onSubmit={onSubmit} title="напишіть нам" buttonText="відправити">
    <Field name="name" value={name} placeholder="повне ім'я" change={change} />
    <Field name="email" value={email} placeholder="електронна пошта" change={change} />
    <Field isTextarea name="message" value={message} placeholder="повідомлення" change={change} />
  </Form>
);

export default ContactUs;
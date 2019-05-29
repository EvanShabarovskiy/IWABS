import React from 'react';
import Field from '../_General/Field';
import Form from '../_General/Form';

export const SignIn = ({ submit, fields }) => (
  <section className="section sign-in">
    <Form formClass="sign-in-form" onSubmit={submit} title="вхід" buttonText="увійти">
      {fields.map(({ name, value, placeholder, type, change }, i) => (
        <Field
          key={i}
          name={name}
          value={value}
          type={type}
          change={change}
          placeholder={placeholder}
        />
      ))}
    </Form>
  </section>
);

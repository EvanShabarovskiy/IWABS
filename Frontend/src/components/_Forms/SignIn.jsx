import React from 'react';
import Field from '../_General/Field';
import Form from '../_General/Form';

export const SignIn = ({ submit, fields }) => (
  <section className="section sign-in">
    <Form formClass="sign-in-form" onSubmit={submit} title="вхід" buttonText="увійти">
      { fields.map(field => <Field key={field.name} {...field} />) }
    </Form>
  </section>
);

import React from 'react';
import Field from '../_General/Field';
import Form from '../_General/Form';
import Loader from '../_General/Loader';

const SignIn = ({ submit, fields, loading }) => (
  <section className="section sign-in">
    <Form formClass="sign-in-form" onSubmit={submit} title="вхід" buttonText="увійти">
      { loading && <Loader /> }
      { fields.map(field => <Field key={field.name} {...field} />) }
    </Form>
  </section>
);

export default SignIn;

import * as React from 'react';
import { StatelessComponent } from 'react';
import Field from './Field';
import { ISignIn } from '../../../../interfaces/ISignIn';

export const SignIn: StatelessComponent<ISignIn> = ({ submit, fields }) => (
  <section className="section">
    <form className="sign-in-form" onSubmit={submit}>
      <h1 className="sign-in-form-title">Вхід</h1>
      {fields.map(({ name, value, placeholder, change }, i) => (
        <Field
          key={i}
          name={name}
          value={value}
          change={change}
          placeholder={placeholder}
        />
      ))}
      <button className="btn sub-btn" type="submit">Увійти</button>
    </form>
  </section>
);
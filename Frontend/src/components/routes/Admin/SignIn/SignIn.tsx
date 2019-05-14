import * as React from 'react';
import { StatelessComponent } from 'react';
import Field from './Field';
import { ISignIn } from '../../../../interfaces/ISignIn';

export const SignIn: StatelessComponent<ISignIn> = ({ submit, fields }) => (
    <form onSubmit={submit}>
      {fields.map(({ name, value, change }, i) => (
        <Field name={name} value={value} change={change} />
      ))}
    </form>
  );

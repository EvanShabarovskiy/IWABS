import * as React from 'react';
import { SignIn } from './SignIn';

const SignInContainer = () => {
  const [fields, setFields] = React.useState({
    login: '',
    password: ''
  });
  const change = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFields(fields => ({
      ...fields,
      [name]: value
    }));
  };
  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('submit');
  };
  const fieldsArr = [
    {
      value: fields.login,
      name: 'login',
      change
    },
    {
      value: fields.password,
      name: 'password',
      change
    }
  ];
  return <SignIn submit={submit} fields={fieldsArr} />;
};

export default SignInContainer;

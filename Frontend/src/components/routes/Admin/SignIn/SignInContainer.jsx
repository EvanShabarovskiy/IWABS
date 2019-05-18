import * as React from 'react';
import { SignIn } from './SignIn';
import Axios from 'axios';
import { set } from 'js-cookie';

const SignInContainer = () => {
  const [fields, setFields] = React.useState({
    login: '',
    password: ''
  });
  const change = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    console.log(fields);
    setFields(fields => ({
      ...fields,
      [name]: value
    }));
  };
  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    Axios.post('http://***/api/auth', fields)
      .then(({ data }) => {
        set('token', data.token);
      })
      .catch(error => {
        !!error.response && console.log(error.response);
      });
  };
  const fieldsArr = [
    {
      value: fields.login,
      name: 'login',
      placeholder: 'логін',
      change
    },
    {
      value: fields.password,
      name: 'password',
      placeholder: 'пароль',
      change
    }
  ];
  return <SignIn submit={submit} fields={fieldsArr} />;
};

export default SignInContainer;

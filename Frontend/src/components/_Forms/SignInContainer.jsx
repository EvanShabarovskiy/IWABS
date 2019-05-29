import React from 'react';
import { SignIn } from './SignIn';
import Axios from 'axios';
import { set } from 'js-cookie';
import { api } from '../../assets/constants/api';
import { connect } from 'react-redux';
import { toggleSignedIn } from '../../store/actions';

const SignInContainer = ({ toggleSignedIn }) => {
  const [fields, setFields] = React.useState({
    email: '',
    password: ''
  });
  const change = e => {
    const { name, value } = e.target;
    setFields(fields => ({
      ...fields,
      [name]: value
    }));
  };
  const submit = e => {
    e.preventDefault();
    Axios.post(api + 'auth', fields)
      .then(({ data }) => {
        set('token', data.token);
        toggleSignedIn(true)
      })
      .catch(error => {
        !!error.response && console.log(error.response);
      });
  };
  const fieldsArr = [
    {
      value: fields.email,
      name: 'email',
      type: 'text',
      placeholder: 'електронна адреса',
      change
    },
    {
      value: fields.password,
      name: 'password',
      type: 'password',
      placeholder: 'пароль',
      change
    }
  ];
  return <SignIn submit={submit} fields={fieldsArr} />;
};

export default connect(() => ({}), { toggleSignedIn })(SignInContainer);

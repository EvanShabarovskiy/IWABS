import React from 'react';
import { connect } from 'react-redux';
import { set } from 'js-cookie';

import { SignIn } from './SignIn';
import { api } from '../../assets/constants/api';
import { toggleSignedIn } from '../../store/actions';
import { Post } from '../../assets/services/request.service';
import withForm from '../withForm';

const SignInContainer = ({ toggleSignedIn, data, setValue }) => {
  const submit = e => {
    e.preventDefault();
    Post(
      api + 'auth', 
      data, 
      ({ token }) => {
        set('token', token);
        toggleSignedIn(true)
      },
      error => console.log(error)
    );
  };
  const fieldsArr = [
    {
      value: data.email,
      name: 'email',
      type: 'text',
      placeholder: 'електронна адреса',
      change: setValue
    },
    {
      value: data.password,
      name: 'password',
      type: 'password',
      placeholder: 'пароль',
      change: setValue
    }
  ];
  return <SignIn submit={submit} fields={fieldsArr} />;
};

const initialState = {
  email: '',
  password: ''
}

export default connect(
  () => ({}), 
  { toggleSignedIn }
)(
  withForm(
    initialState, 
    initialState
  )(SignInContainer));

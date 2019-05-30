import React from 'react';
import { connect } from 'react-redux';
import { set } from 'js-cookie';

import { SignIn } from './SignIn';
import { api } from '../../assets/constants/api';
import { toggleSignedIn } from '../../store/actions';
import { Post } from '../../assets/services/request.service';
import { useFormValidation } from '../../assets/hooks/useFormValidation';

const initialState = {
  email: '',
  password: ''
}

const SignInContainer = ({ toggleSignedIn }) => {
  const { data, change } = useFormValidation(initialState, initialState);
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
      change
    },
    {
      value: data.password,
      name: 'password',
      type: 'password',
      placeholder: 'пароль',
      change
    }
  ];
  return <SignIn submit={submit} fields={fieldsArr} />;
};

export default connect(
  () => ({}), 
  { toggleSignedIn }
)(SignInContainer);
import React from 'react';
import { connect } from 'react-redux';
import { set } from 'js-cookie';
import { isEmail } from 'validator'

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
  const { data, errors, change, validate, reset } = useFormValidation(initialState, initialState);
  const validateParams = {
    email: {
      condition: !isEmail(data.email),
      errorText: ' недопустимий формат електронної адреси '
    },
    password: {
      condition: data.password.length < 5,
      errorText: ' пароль повинен містити не меньше 5 символів '
    }
 }
  const submit = e => {
    e.preventDefault();
    const dataKeys = Object.keys(data);
    const validateResults = dataKeys.map(item => item && validate(item, data[item], !!validateParams[item] && validateParams[item]));
    const isValid = validateResults.find(value => value == false) != false && true; 

    if (isValid) {
      Post(
        api + 'auth', 
        data, 
        ({ token }) => {
          set('token', token);
          toggleSignedIn(true)
          reset();
        },
        error => console.log(error)
      );
    }
  };
  const fieldsArr = [
    {
      value: data.email,
      error: errors.email,
      name: 'email',
      type: 'text',
      placeholder: 'електронна адреса',
      change
    },
    {
      value: data.password,
      error: errors.password,
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
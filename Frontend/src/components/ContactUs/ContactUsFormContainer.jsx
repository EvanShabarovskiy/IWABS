import React from 'react';
import { get } from 'js-cookie'

import withForm from '../withForm';
import ContactUsForm from './ContactUsForm';
import { api } from '../../assets/constants/api';
import { Post } from '../../assets/services/request.service';

const ContactUsFormContainer = ({ data, setValue }) => {
  const onSubmit = e => {
    e.preventDefault();
    Post(
      api + 'feedback',
      data,
      data => console.log(data),
      error => console.log(error),
      get('token')
    );
  }

  return <ContactUsForm onSubmit={onSubmit} data={data} change={setValue} />
};

const initialState = {
  name: '', 
  email: '',
  subject: '', 
  message: '' 
}

export default withForm(initialState, initialState)(ContactUsFormContainer); 
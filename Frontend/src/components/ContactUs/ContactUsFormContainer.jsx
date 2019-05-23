import React from 'react';
import Axios from 'axios';
import withForm from '../withForm';
import ContactUsForm from './ContactUsForm';

import { api } from '../../assets/constants/api';

const ContactUsFormContainer = ({ data, setValue }) => {
  const onSubmit = e => {
    e.preventDefault();
    Axios.post(`${api}`, data)
      .then(({ data }) => console.log(data))
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
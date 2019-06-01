import React from 'react';
import { get } from 'js-cookie'

import ContactUs from './ContactUs';
import { api } from '../../assets/constants/api';
import { Post } from '../../assets/services/request.service';
import { useFormValidation } from '../../assets/hooks/useFormValidation';

const initialState = {
  name: '', 
  email: '',
  subject: '', 
  message: '' 
}

const ContactUsContainer = () => {
  const { data, change } = useFormValidation(initialState, initialState);
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

  return <ContactUs {...data} onSubmit={onSubmit} change={change} />
};



export default ContactUsContainer; 
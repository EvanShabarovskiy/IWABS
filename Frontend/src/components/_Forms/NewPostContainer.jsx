import React from 'react';
import { connect } from 'react-redux'

import { useToggle } from '../../assets/hooks/useToggle';
import { createPost } from '../../store/news/actions';
import { parseToFormData } from '../../assets/functions/parseToFormData';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import NewPost from './NewPost';

const initialState = {
  title: '',
  text: '',
  file: {
    name: ''
  }
}

const NewPostContainer = ({ createPost }) => {
  const { data, change, reset } = useFormValidation(initialState, initialState);
  const toggle = useToggle();
  const { handleToggled } = toggle;
  
  const onSubmit = e => {
    e.preventDefault();
    let formData = parseToFormData(data);
    createPost(formData);
    reset();
    handleToggled();
  }

  return <NewPost {...data} {...toggle} change={change} onSubmit={onSubmit} />
};

export default connect(
  () => ({}), 
  { createPost }
)(NewPostContainer);
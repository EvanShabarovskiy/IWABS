import React from 'react';
import NewPhoto from './NewPhoto';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';

const initialState = { 
  title: '',
  file: {
    name: ''
  }
}

const NewPhotoContainer = () => {
  const { data, change, reset } = useFormValidation(initialState, initialState);
  const toggle = useToggle(reset);
  const { handleToggled } = toggle;

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }

  return <NewPhoto {...data} {...toggle} change={change} onSubmit={onSubmit} />
};

export default NewPhotoContainer;
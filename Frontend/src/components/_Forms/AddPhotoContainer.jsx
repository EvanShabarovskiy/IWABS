import React from 'react';
import AddPhoto from './AddPhoto';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';

const initialState = { 
  title: '',
  file: {
    name: ''
  }
}

const AddPhotoContainer = () => {
  const { toggled, handleToggled } = useToggle();
  const { data, change } = useFormValidation(initialState, initialState);
  
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }

  if (toggled) {
    return <AddPhoto {...data} change={change} onSubmit={onSubmit} />
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>додати фото</button>
  }
};

export default AddPhotoContainer;
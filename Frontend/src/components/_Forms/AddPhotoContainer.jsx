import React from 'react';
import AddPhoto from './AddPhoto';
import { useToggle } from '../../assets/hooks/useToggle';
import { useUpload } from '../../assets/hooks/useUpload';

const initialState = { 
  title: ''
}

const AddPhotoContainer = () => {
  const { toggled, handleToggled } = useToggle();
  const { upload } = useUpload();
  const { data, change } = useFormValidation(initialState, initialState);
  
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }

  if (toggled) {
    return <AddPhoto upload={upload} change={change} data={data} onSubmit={onSubmit} />
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>додати фото</button>
  }
};

export default AddPhotoContainer;
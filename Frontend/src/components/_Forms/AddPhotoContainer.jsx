import React from 'react';
import AddPhoto from './AddPhoto';
import withForm from '../withForm';
import { useToggle } from '../../assets/hooks/useToggle';
import { useUpload } from '../../assets/hooks/useUpload';


const AddPhotoContainer = ({ setValue, data }) => {
  const { toggled, handleToggled } = useToggle();
  const { upload } = useUpload();
  
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }

  if (toggled) {
    return <AddPhoto upload={upload} change={setValue} data={data} onSubmit={onSubmit} />
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>додати фото</button>
  }
};

const initialState = { 
  title: ''
}

export default withForm(initialState, initialState)(AddPhotoContainer);
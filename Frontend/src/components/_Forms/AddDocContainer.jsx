import React from 'react';
import AddDoc from './AddDoc';
import { useToggle } from '../../assets/hooks/useToggle';
import { useUpload } from '../../assets/hooks/useUpload';
import { useFormValidation } from '../../assets/hooks/useFormValidation';

const initialState = { 
  name: ''
}

const AddDocContainer = () => {
  const { toggled, handleToggled } = useToggle();
  const { upload } = useUpload();
  const { data, change } = useFormValidation(initialState, initialState);
  
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }
  if (toggled) {
    return <AddDoc upload={upload} change={change} data={data} onSubmit={onSubmit} />
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>додати документ</button>
  }
};

export default AddDocContainer;
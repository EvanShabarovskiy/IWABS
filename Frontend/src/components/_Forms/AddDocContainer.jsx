import React from 'react';
import AddDoc from './AddDoc';
import withForm from '../withForm';
import { useToggle } from '../../assets/hooks/useToggle';
import { useUpload } from '../../assets/hooks/useUpload';

const AddDocContainer = ({ setValue, data }) => {
  const { toggled, handleToggled } = useToggle();
  const { upload } = useUpload();
  
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }
  if (toggled) {
    return <AddDoc upload={upload} change={setValue} data={data} onSubmit={onSubmit} />
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>додати документ</button>
  }
};

const initialState = { 
  name: ''
}

export default withForm(initialState, initialState)(AddDocContainer);
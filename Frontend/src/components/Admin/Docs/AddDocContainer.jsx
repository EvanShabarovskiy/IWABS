import React, { useState } from 'react';
import AddDoc from './AddDoc';
import withForm from '../../withForm';
import { useToggle } from '../../../assets/hooks/useToggle';

const AddDocContainer = ({ setValue, data }) => {
  const { toggled, handleToggled } = useToggle();
  const [uploadOptions, setUploadOptions] = useState({
    file: null, 
    fileName: '', 
    disabled: false
  });

  const fileChange = ({ target: { files } }) => {
    console.log('files', files);
    setUploadOptions({
      file: files[0],
      fileName: files[0].name,
      disabled: true
    })
  }
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }
  uploadOptions['fileChange'] = fileChange;
  if (toggled) {
    return <AddDoc uploadOptions={uploadOptions} change={setValue} data={data} onSubmit={onSubmit} />
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>додати документ</button>
  }
};

const initialState = { 
  name: ''
}

export default withForm(initialState, initialState)(AddDocContainer);
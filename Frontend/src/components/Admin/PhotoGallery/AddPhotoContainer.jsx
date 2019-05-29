import React, { useState } from 'react';
import AddPhoto from './AddPhoto';
import withForm from '../../withForm';
import { useToggle } from '../../../assets/hooks/useToggle';


const AddPhotoContainer = ({ setValue, data }) => {
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
    return <AddPhoto uploadOptions={uploadOptions} change={setValue} data={data} onSubmit={onSubmit} />
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>додати фото</button>
  }
};

const initialState = { 
  title: ''
}

export default withForm(initialState, initialState)(AddPhotoContainer);
import React, { useState } from 'react';
import AddPhoto from './AddPhoto';
import { message } from 'antd';
import withForm from '../../withForm';


const AddPhotoContainer = ({ setValue, data }) => {
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
  }
  uploadOptions['fileChange'] = fileChange;

  return (
    <AddPhoto uploadOptions={uploadOptions} change={setValue} data={data} onSubmit={onSubmit} />
  );
};

const initialState = { 
  title: ''
}

export default withForm(initialState, initialState)(AddPhotoContainer);
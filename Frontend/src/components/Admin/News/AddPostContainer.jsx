import React, { useState } from 'react';
import AddPost from './AddPost';
import Axios from 'axios';
import { api } from '../../../assets/constants/api';
import withForm from '../../withForm';

const AddPostContainer = ({ data, setValue }) => {
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
    let formData = new FormData();
    const { title, text } = data;
    const { file } = uploadOptions;

    formData.append("title", title);
    formData.append("text", text);
    formData.append("file", file);
    console.log(formData);
    Axios.post(api + 'news', formData)
      .then(({ data }) => console.log('success', data))
      .catch(error => console.log(error.response))
  }
  uploadOptions['fileChange'] = fileChange;
  return (
    <AddPost uploadOptions={uploadOptions} data={data} change={setValue} onSubmit={onSubmit} />
  );
};

const initialState = {
  title: '',
  text: ''
}

export default withForm(initialState, initialState)(AddPostContainer);
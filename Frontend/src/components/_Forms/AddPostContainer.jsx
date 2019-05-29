import React, { useState } from 'react';
import AddPost from './AddPost';
import Axios from 'axios';
import { api } from '../../assets/constants/api';
import withForm from '../withForm';
import { useToggle } from '../../assets/hooks/useToggle';
import { useUpload } from '../../assets/hooks/useUpload';

const AddPostContainer = ({ data, setValue }) => {
  const { toggled, handleToggled } = useToggle();
  const { upload } = useUpload();
  
  const onSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    const { title, text } = data;
    const { file } = upload;

    formData.append("title", title);
    formData.append("text", text);
    formData.append("file", file);
    console.log(formData);
    Axios.post(api + 'news', formData)
      .then(({ data }) => {
        console.log('success', data);
        handleToggled();
      })
      .catch(error => console.log(error.response))
  }

  if (toggled) {
    return <AddPost upload={upload} data={data} change={setValue} onSubmit={onSubmit} />
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>додати новину</button>
  }
};

const initialState = {
  title: '',
  text: ''
}

export default withForm(initialState, initialState)(AddPostContainer);
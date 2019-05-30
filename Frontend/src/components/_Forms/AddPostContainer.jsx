import React from 'react';
import { connect } from 'react-redux'

import AddPost from './AddPost';
import withForm from '../withForm';
import { useToggle } from '../../assets/hooks/useToggle';
import { useUpload } from '../../assets/hooks/useUpload';
import { createPost } from '../../store/news/actions';

const AddPostContainer = ({ data, setValue, createPost }) => {
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
    
    createPost(formData);
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

export default connect(() => ({}), { createPost })(withForm(initialState, initialState)(AddPostContainer));
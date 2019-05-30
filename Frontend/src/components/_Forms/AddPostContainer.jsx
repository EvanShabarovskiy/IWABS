import React from 'react';
import { connect } from 'react-redux'

import AddPost from './AddPost';
import withForm from '../withForm';
import { useToggle } from '../../assets/hooks/useToggle';
import { useUpload } from '../../assets/hooks/useUpload';
import { createPost } from '../../store/news/actions';
import { parseToFormData } from '../../assets/constants/functions/parseToFormData';
import { useFormValidation } from '../../assets/hooks/useFormValidation';

const initialState = {
  title: '',
  text: ''
}

const AddPostContainer = ({ createPost }) => {
  const { toggled, handleToggled } = useToggle();
  const { upload, resetFile } = useUpload();
  const { data, change, setData } = useFormValidation(initialState, initialState);
  
  const onSubmit = e => {
    e.preventDefault();
    const { file } = upload;
    let formData = parseToFormData({ ...data, file });
    createPost(formData);
    handleToggled();
    setData(initialState);
    resetFile();
  }

  if (toggled) {
    return <AddPost upload={upload} data={data} change={change} onSubmit={onSubmit} />
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>додати новину</button>
  }
};

export default connect(() => ({}), { createPost })(AddPostContainer);
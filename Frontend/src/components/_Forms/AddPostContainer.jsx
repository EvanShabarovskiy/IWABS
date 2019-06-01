import React from 'react';
import { connect } from 'react-redux'

import AddPost from './AddPost';
import { useToggle } from '../../assets/hooks/useToggle';
import { createPost } from '../../store/news/actions';
import { parseToFormData } from '../../assets/constants/functions/parseToFormData';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import Modal from '../_General/Modal';

const initialState = {
  title: '',
  text: '',
  file: {
    name: ''
  }
}

const AddPostContainer = ({ createPost }) => {
  const { toggled, handleToggled } = useToggle();
  const { data, change, reset } = useFormValidation(initialState, initialState);
  
  const onSubmit = e => {
    e.preventDefault();
    let formData = parseToFormData(data);
    createPost(formData);
    reset();
    handleToggled();
  }

  return (
    <>
      <Modal open={toggled} onClose={handleToggled}>
        <AddPost {...data} change={change} onSubmit={onSubmit} />
      </Modal>
      <button className="btn toggle-btn" onClick={handleToggled}>додати новину</button>
    </>
  );
};

export default connect(
  () => ({}), 
  { createPost }
)(AddPostContainer);
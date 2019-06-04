import React from 'react';
import { connect } from 'react-redux'

import NewDoc from './NewDoc';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import Modal from '../_General/Modal';
import { createDoc } from '../../store/docs/actions'
import { parseToFormData } from '../../assets/functions/parseToFormData';

const initialState = { 
  title: '',
  file: {
    name: ''
  }
}

const NewDocContainer = ({ createDoc }) => {
  const { data, change, reset } = useFormValidation(initialState, initialState);
  const { toggled, handleToggled } = useToggle(reset);
  
  const onSubmit = e => {
    e.preventDefault();
    const formData = parseToFormData(data);
    createDoc(formData);
    handleToggled();
    reset();
  }

  return (
    <>
      <Modal open={toggled} onClose={handleToggled} >
        <NewDoc {...data} change={change} onSubmit={onSubmit} />
      </Modal>
      <button className="btn toggle-btn" onClick={handleToggled}>додати документ</button>
    </>
  );
};

export default connect(() => ({}), { createDoc })(NewDocContainer);
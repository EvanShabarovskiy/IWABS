import React, { useEffect } from 'react';
import AddDoc from './AddDoc';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import Modal from '../_General/Modal';

const initialState = { 
  name: '',
  file: {
    name: ''
  }
}

const { style } = document.body;

const AddDocContainer = () => {
  const { toggled, handleToggled } = useToggle();
  const { data, change } = useFormValidation(initialState, initialState);

  useEffect(() => {
    if (toggled) {
      style.overflow = 'hidden';
    } else {
      style.overflow = 'visible';
    }
  }, [toggled]);
  
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }


  return (
    <>
      <Modal open={toggled} onClose={handleToggled} >
        <AddDoc {...data} change={change} onSubmit={onSubmit} />
      </Modal>
      <button className="btn toggle-btn" onClick={handleToggled}>додати документ</button>
    </>
  ) 
 
};

export default AddDocContainer;
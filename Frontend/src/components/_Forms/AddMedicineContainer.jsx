import React from 'react';
import AddMedicine from './AddMedicine';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import Modal from '../_General/Modal';

const initialState = {
  name: '', 
  releaseForm: '', 
  unit: '', 
  amount: ''
};

const AddMedicineContainer = () => {
  const { toggled, handleToggled } = useToggle();
  const { data, change } = useFormValidation(initialState, initialState);

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }

  return (
    <>
      <Modal open={toggled} onClose={handleToggled}>
        <AddMedicine change={change} data={data} onSubmit={onSubmit} />
      </Modal>
      <button className="btn toggle-btn" onClick={handleToggled}>додати ліки</button>
    </>
  )   
};

export default AddMedicineContainer;
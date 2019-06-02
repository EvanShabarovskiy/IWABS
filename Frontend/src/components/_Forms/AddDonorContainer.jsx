import React, { useState } from 'react';
import AddDonor from './AddDonor';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import Modal from '../_General/Modal';

const initialState = { 
  name:'',
  email:'',
  bloodGroup:'',
  bloodDonated:'',
  address:''
}

const AddDonorContainer = () => {
  const { toggled, handleToggled } = useToggle();
  const [date, setDate] = useState('');
  const { data, change } = useFormValidation(initialState, initialState);

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }
  const onDateChange = (_, date) => {
    setDate(date);
  }
  return (
    <>
      <Modal open={toggled} onClose={handleToggled}>
        <AddDonor {...data} change={change} onSubmit={onSubmit} onDateChange={onDateChange} />
      </Modal>
      <button className="btn toggle-btn" onClick={handleToggled}>новий донор</button>
    </>
  )   
};



export default AddDonorContainer;
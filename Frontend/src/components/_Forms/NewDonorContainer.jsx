import React, { useState } from 'react';
import { connect } from 'react-redux'

import NewDonor from './NewDonor';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import Modal from '../_General/Modal';
import { createDonor } from '../../store/donors/actions';

const initialState = { 
  name:'',
  email:'',
  bloodGroup:'',
  bloodDonated:'',
  address:'',
}

const NewDonorContainer = ({ createDonor }) => {
  const [date, setDate] = useState('');
  const { data, change, reset } = useFormValidation(initialState, initialState);
  const { toggled, handleToggled } = useToggle(reset);

  const onSubmit = e => {
    e.preventDefault();
    data['date'] = date;
    createDonor(data);
    handleToggled();
    reset();
  }
  const onDateChange = (_, date) => {
    setDate(date);
  }
  return (
    <>
      <Modal open={toggled} onClose={handleToggled}>
        <NewDonor {...data} change={change} onSubmit={onSubmit} onDateChange={onDateChange} />
      </Modal>
      <button className="btn toggle-btn" onClick={handleToggled}>новий донор</button>
    </>
  )   
};



export default connect(() => ({}), { createDonor })(NewDonorContainer);
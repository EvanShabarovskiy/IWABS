import React, { useState } from 'react';
import AddDonor from './AddDonor';
import withForm from '../withForm';
import { useToggle } from '../../assets/hooks/useToggle';

const AddDonorContainer = ({ data, setValue }) => {
  const { toggled, handleToggled } = useToggle();
  const [date, setDate] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }
  const onDateChange = (_, date) => {
    setDate(date);
  }
  if (toggled) {
    return <AddDonor data={data} change={setValue} onSubmit={onSubmit} onDateChange={onDateChange} />    
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>новий донор</button>
  }
};

const initialState = { 
  name:'',
  email:'',
  bloodGroup:'',
  bloodDonated:'',
  address:''
}

export default withForm(initialState, initialState)(AddDonorContainer);
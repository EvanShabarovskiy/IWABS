import React, { useState } from 'react';
import AddDonor from './AddDonor';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';

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
  if (toggled) {
    return <AddDonor data={data} change={change} onSubmit={onSubmit} onDateChange={onDateChange} />    
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>новий донор</button>
  }
};



export default AddDonorContainer;
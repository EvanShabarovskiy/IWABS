import React, { useState } from 'react';
import AddDonor from './AddDonor';
import withForm from '../../withForm';

const AddDonorContainer = ({ data, setValue }) => {
  const [date, setDate] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  }
  const onDateChange = (_, date) => {
    setDate(date);
  }
  return (
    <AddDonor data={data} change={setValue} onSubmit={onSubmit} onDateChange={onDateChange} />
  );
};

const initialState = { 
  name:'',
  email:'',
  bloodGroup:'',
  bloodDonated:'',
  address:''
}

export default withForm(initialState, initialState)(AddDonorContainer);
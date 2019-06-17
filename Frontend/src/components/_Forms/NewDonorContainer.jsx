import React, { useState } from 'react';
import { connect } from 'react-redux'

import NewDonor from './NewDonor';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
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
  const toggle = useToggle(reset);
  const { handleToggled } = toggle;
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
  return <NewDonor {...data} {...toggle} change={change} onSubmit={onSubmit} onDateChange={onDateChange} />
};



export default connect(() => ({}), { createDonor })(NewDonorContainer);
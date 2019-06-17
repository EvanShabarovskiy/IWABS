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
  const [group, setGroup] = useState('');
  const { data, change, reset } = useFormValidation(initialState, initialState);
  const toggle = useToggle(reset);
  const { handleToggled } = toggle;
  const onSubmit = e => {
    e.preventDefault();
    data['dateOfBirth'] = date;
    data['bloodGroup'] = group;
    createDonor(data);
    handleToggled();
    reset();
  }

  const onSelectChange = value => setGroup(value);
  const onDateChange = (_, date) => {
    setDate(date);
  }
  return <NewDonor {...data} {...toggle} change={change} onSubmit={onSubmit} onDateChange={onDateChange} onSelectChange={onSelectChange} />
};



export default connect(() => ({}), { createDonor })(NewDonorContainer);
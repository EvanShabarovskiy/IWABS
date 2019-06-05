import React from 'react';
import NewMedicine from './NewMedicine';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';

const initialState = {
  name: '', 
  releaseForm: '', 
  unit: '', 
  amount: ''
};

const NewMedicineContainer = () => {
  const { data, change, reset } = useFormValidation(initialState, initialState);
  const toggle = useToggle(reset);
  const { handleToggled } = toggle;

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }

  return <NewMedicine {...data} {...toggle} change={change} onSubmit={onSubmit} />
};

export default NewMedicineContainer;
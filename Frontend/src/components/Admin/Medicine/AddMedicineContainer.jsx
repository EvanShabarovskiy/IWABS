import React from 'react';
import AddMedicine from './AddMedicine';
import withForm from '../../withForm';

const AddMedicineContainer = ({ setValue, data }) => {

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <AddMedicine change={setValue} data={data} onSubmit={onSubmit} />
  );
};

const initialState = {
  name: '', 
  releaseForm: '', 
  unit: '', 
  amount: ''
}

export default withForm(initialState, initialState)(AddMedicineContainer);
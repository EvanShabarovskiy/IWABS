import React from 'react';
import AddMedicine from './AddMedicine';
import withForm from '../withForm';
import { useToggle } from '../../assets/hooks/useToggle';

const AddMedicineContainer = ({ setValue, data }) => {
  const { toggled, handleToggled } = useToggle();

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }
  if (toggled) {
    return <AddMedicine change={setValue} data={data} onSubmit={onSubmit} />
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>додати ліки</button>
  }
};

const initialState = {
  name: '', 
  releaseForm: '', 
  unit: '', 
  amount: ''
}

export default withForm(initialState, initialState)(AddMedicineContainer);
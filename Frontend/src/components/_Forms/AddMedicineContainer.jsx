import React from 'react';
import AddMedicine from './AddMedicine';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';

const initialState = {
  name: '', 
  releaseForm: '', 
  unit: '', 
  amount: ''
};

const AddMedicineContainer = () => {
  const { toggled, handleToggled } = useToggle();
  const { data, change } = useFormValidation(initialState, initialState);

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    handleToggled();
  }
  if (toggled) {
    return <AddMedicine change={change} data={data} onSubmit={onSubmit} />
  } else {
    return <button className="btn toggle-btn" onClick={handleToggled}>додати ліки</button>
  }
};

export default AddMedicineContainer;
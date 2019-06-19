import React from 'react';
import { useDispatch } from 'react-redux';
import NewMedicine from './NewMedicine';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import { createMedicine } from '../../store/medicine/actions'
const initialState = {
  name: '', 
  releaseForm: '', 
  unit: '', 
  amount: ''
};

const NewMedicineContainer = () => {
  const { data, errors, change, reset, validate } = useFormValidation(initialState, initialState);
  const toggle = useToggle(reset);
  const dispatch = useDispatch();
  const { handleToggled } = toggle;
  const { name, releaseForm, unit, amount } = data;

  const validateParams = {
    name: {
      condition: name.length < 5,
      errorText: 'назва повинна містити не меньше 5 символів'
    },
    releaseForm: {
      condition: releaseForm.length < 5,
      errorText: 'форма випуску повинна містити не меньше 5 символів'
    },
    unit: {
      condition: unit.length < 2,
      errorText: 'одиниця виміру повинна містити не меньше 2 символів'
    },
    amount: {
      condition: parseInt(amount) < 1,
      errorText: 'кількість повинна дорівнювати що найменше 1'
    }
 }

  const onSubmit = e => {
    e.preventDefault();
    const dataKeys = Object.keys(data);
    const validateResults = dataKeys.map(item => item && validate(item, data[item], !!validateParams[item] && validateParams[item]));
    const isValid = validateResults.find(value => value == false) != false && true; 
    console.log('data', data);
    if (isValid) {
      dispatch(createMedicine(data));
      reset();
      handleToggled();
    }
  }

  return <NewMedicine {...data} {...toggle} errors={errors} change={change} onSubmit={onSubmit} />
};

export default NewMedicineContainer;
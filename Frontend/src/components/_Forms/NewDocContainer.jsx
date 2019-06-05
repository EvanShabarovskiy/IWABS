import React from 'react';
import { connect } from 'react-redux'

import NewDoc from './NewDoc';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import { createDoc } from '../../store/docs/actions'
import { parseToFormData } from '../../assets/functions/parseToFormData';

const initialState = { 
  title: '',
  file: {
    name: ''
  }
}

const NewDocContainer = ({ createDoc }) => {
  const { data, change, reset } = useFormValidation(initialState, initialState);
  const toggle = useToggle(reset);
  const { handleToggled } = toggle;

  const onSubmit = e => {
    e.preventDefault();
    const formData = parseToFormData(data);
    createDoc(formData);
    handleToggled();
    reset();
  }

  return <NewDoc {...data} {...toggle} change={change} onSubmit={onSubmit} />
};

export default connect(
  () => ({}), 
  { createDoc }
)(NewDocContainer);
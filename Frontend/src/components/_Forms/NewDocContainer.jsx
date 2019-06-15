import React from 'react';
import { connect } from 'react-redux'

import NewDoc from './NewDoc';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import { createDoc } from '../../store/docs/actions'
import { parseToFormData } from '../../assets/functions/parseToFormData';

const initialState = {
  title: '',
  text: '',
  file: null
}

const requiredFields = initialState;
requiredFields['file'] = '';

const NewDocContainer = ({ createDoc }) => {
  const { data, errors, change, reset, validate } = useFormValidation(initialState, requiredFields);
  const toggle = useToggle(reset);
  const { handleToggled } = toggle;

  const validateParams = {
    file: {
      condition: data.file == '',
      errorText: 'виберіть файл для завантаження'
    },
    title: {
      condition: data.title.length < 5,
      errorText: 'назва повинна містити не меньше 5 символів'
    }
 }

  const onSubmit = e => {
    console.log('submit');
    e.preventDefault();
    const dataKeys = Object.keys(data);
    const validateResults = dataKeys.map(item => item && validate(item, data[item], !!validateParams[item] && validateParams[item]));
    const isValid = validateResults.find(value => value == false) != false && true; 
    let formData = parseToFormData(data);
    
    if (isValid) {
      createDoc(formData);
      reset();
      handleToggled();
    }
  }

  return <NewDoc {...data} {...toggle} errors={errors} fileName={data.file.name} change={change} onSubmit={onSubmit} />
};

export default connect(
  null, 
  { createDoc }
)(NewDocContainer);
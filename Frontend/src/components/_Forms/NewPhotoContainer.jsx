import React from 'react';
import { connect } from 'react-redux'

import NewPhoto from './NewPhoto';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import { addImage } from '../../store/gallery/actions'
import { parseToFormData } from '../../assets/functions/parseToFormData';

const initialState = {
  title: '',
  file: null
}

const requiredFields = initialState;
requiredFields['file'] = '';

const NewPhotoContainer = ({ addImage }) => {
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
      errorText: 'заголовок повинен містити не меньше 5 символів'
    }
 }

  const onSubmit = e => {
    e.preventDefault();
    const dataKeys = Object.keys(data);
    const validateResults = dataKeys.map(item => item && validate(item, data[item], !!validateParams[item] && validateParams[item]));
    const isValid = validateResults.find(value => value == false) != false && true; 
    let formData = parseToFormData(data);

    if (isValid) {
      addImage(formData);
      reset();
      handleToggled();
    }
  }

  return <NewPhoto {...data} {...toggle} fileName={data.file.name} errors={errors} change={change} onSubmit={onSubmit} />
};

export default connect(
  () => ({}), 
  { addImage }
)(NewPhotoContainer);
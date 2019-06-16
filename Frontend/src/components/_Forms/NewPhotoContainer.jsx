import React from 'react';

import NewPhoto from './NewPhoto';
import { useToggle } from '../../assets/hooks/useToggle';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import { ADD_IMAGE } from '../../store/gallery/actions'
import { parseToFormData } from '../../assets/functions/parseToFormData';
import { useCreate } from '../../assets/hooks/useCreate';

const initialState = {
  title: '',
  file: null
}

const requiredFields = initialState;
requiredFields['file'] = '';

const NewPhotoContainer = () => {
  const { data, errors, change, reset, validate } = useFormValidation(initialState, requiredFields);
  const toggle = useToggle(reset);
  const { handleToggled } = toggle;
  const createImage = useCreate();

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
      createImage(formData, 'gallery', ADD_IMAGE);
      reset();
      handleToggled();
    }
  }

  return <NewPhoto {...data} {...toggle} fileName={data.file.name} errors={errors} change={change} onSubmit={onSubmit} />
};

export default NewPhotoContainer;
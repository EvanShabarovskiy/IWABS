import React from 'react';
import { connect } from 'react-redux'

import { useToggle } from '../../assets/hooks/useToggle';
import { createPost } from '../../store/news/actions';
import { parseToFormData } from '../../assets/functions/parseToFormData';
import { useFormValidation } from '../../assets/hooks/useFormValidation';
import NewPost from './NewPost';

const initialState = {
  title: '',
  text: '',
  file: null
}

const requiredFields = initialState;
requiredFields['file'] = '';

const NewPostContainer = ({ createPost }) => {
  const { data, errors, change, reset, validate } = useFormValidation(initialState, requiredFields);
  const toggle = useToggle(reset);
  const { handleToggled } = toggle;

  console.log(typeof(data.file))

  const validateParams = {
    file: {
      condition: data.file == '',
      errorText: 'виберіть файл для завантаження'
    },
    title: {
      condition: data.title.length < 5,
      errorText: 'заголовок повинен містити не меньше 5 символів'
    },
    text: {
      condition: data.text.length < 255,
      errorText: 'текст повинен містити не меньше 255 символів'
    }
 }
  
  const onSubmit = e => {
    e.preventDefault();
    const dataKeys = Object.keys(data);
    console.log(dataKeys)
    const validateResults = dataKeys.map(item => item && validate(item, data[item], !!validateParams[item] && validateParams[item]));
    const isValid = validateResults.find(value => value == false) != false && true; 
    let formData = parseToFormData(data);

    if (isValid) {
      createPost(formData);
      reset();
      handleToggled();
    }
  }
  return <NewPost {...data} {...toggle} fileName={data.file.name} errors={errors} change={change} onSubmit={onSubmit} />
};

export default connect(
  () => ({}), 
  { createPost }
)(NewPostContainer);
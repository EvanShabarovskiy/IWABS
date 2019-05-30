import { useState } from 'react';

export const useFormValidation = (initialState, requiredFields) =>  {
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState(requiredFields);

  const change = ({ target: { value, name } }) => {
    setData(data => ({
      ...data, 
      [name]: value
    }));
    setErrors(errors => ({
      ...errors,
      [name]: ''
    }));
  };

  const validate = (name, value, { condition, errorText }) => {
    if (value.trim() == '') {
      setErrors(errors => ({
          ...errors,
          [name]: 'this field can not be empty',
        })
      );
      return false;
    }

    if (condition) {
      setErrors(errors => ({
        ...errors,
        [name]: errorText
      }));
      return false;
    }
    return true;
  };

  return { data, errors, change, setData, validate, setErrors };
}
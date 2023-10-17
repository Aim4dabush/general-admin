import { useState } from 'react';

const useValidation = (validation, initialValue) => {
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState('');

  if (initialValue !== undefined) {
    setValue(initialValue);
  }

  const isValid = validation(value);
  const error = !isValid && touched;

  const blurHandler = () => {
    setTouched(true);
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const resetHandler = () => {
    setTouched(false);
    setValue('');
  };

  return {
    error,
    isValid,
    value,
    blurHandler,
    changeHandler,
    resetHandler,
  };
};

export default useValidation;

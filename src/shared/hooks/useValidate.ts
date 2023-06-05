import { ChangeEvent, useEffect, useMemo, useState } from 'react';

const useValidation = (value: string, validations: object) => {
  const [isEmailError, setIsEmailError] = useState(false);
  const [isEmptyError, setIsEmptyError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const emailPattern = useMemo(
    () =>
      /^([a-zA-Z0-9_.-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/,
    [],
  );

  useEffect(() => {
    for (const rule in validations) {
      switch (rule) {
        case 'isEmpty':
          value.length ? setIsEmptyError(() => false) : setIsEmptyError(() => true);
          break;
        case 'isEmail':
          emailPattern.test(value.toLowerCase())
            ? setIsEmailError(() => false)
            : setIsEmailError(() => true);
          break;
        case 'maxLength':
          value.length > +validations[rule]
            ? setMaxLengthError(() => true)
            : setMaxLengthError(() => false);
          break;
        case 'minLength':
          value.length < +validations[rule]
            ? setMinLengthError(() => true)
            : setMinLengthError(() => false);
          break;
        default:
          break;
      }
    }
  }, [emailPattern, value, validations]);

  useEffect(() => {
    !isEmailError && !isEmptyError && !maxLengthError && !minLengthError
      ? setIsValid(() => true)
      : setIsValid(() => false);
  }, [isEmailError, isEmptyError, maxLengthError, minLengthError]);

  return {
    isEmailError,
    isEmptyError,
    isValid,
    maxLengthError,
    minLengthError,
  };
};

const useInput = (initialValue: string, validations: object) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const validFlags = useValidation(value, validations);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  return {
    isDirty,
    onBlur,
    onChange,
    value,
    ...validFlags,
  };
};

export { useInput };

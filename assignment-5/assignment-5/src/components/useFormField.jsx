import { useState } from "react";

export default function useFormField(initialValue, validateFn) {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const error = touched ? validateFn(value) : "";

  function onChange(e) {
    setValue(e.target.value);
  }

  function onBlur() {
    setTouched(true);
  }

  return {
    value,
    onChange,
    onBlur,
    error,
    touched,
    setValue,
    setTouched,
  };
}

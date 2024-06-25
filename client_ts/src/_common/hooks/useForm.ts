import { useState } from "react";

export const useForm = (initialState: object = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return { values, handleInputChange, reset };
};

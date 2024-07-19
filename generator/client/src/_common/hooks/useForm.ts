import { useState } from "react";
type Values = { [key: string]: string };
export const useForm = <T>(initialState: T) => {

  const [values, setValues] = useState<T>(initialState);



  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: { target: HTMLInputElement | HTMLSelectElement }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return { values, handleInputChange, reset };
};

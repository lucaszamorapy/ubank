import { useState } from "react";

const types = {
  name: {
    regex: /^[A-Za-zÀ-ú\s]{3,}$/,
    message: "O nome deve conter no mínimo 3 caracteres.",
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState(type === "checkbox" ? false : "");
  const [error, setError] = useState("");

  function validate(value) {
    if (type === false) return true;
    if (type === "checkbox") return true; // No validation for checkboxes
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.type === "checkbox" ? target.checked : target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;

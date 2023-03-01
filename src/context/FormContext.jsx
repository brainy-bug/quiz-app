import React, { createContext, useState, useMemo } from "react";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
};

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.password) {
      errors.password = "Password is required";
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    // axios
    //   .post("/api/submit-form", formData)
    //   .then((response) => {
    //     console.log(response.data);
    //     // do something with successful response
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //     setErrors(error.response.data);
    //   });
  };

  const memoizedContextValue = useMemo(() => {
    return {
      formData,
      setFormData,
      errors,
      setErrors,
      handleChange,
      handleSubmit,
    };
  }, [formData, setFormData, errors, setErrors, handleChange, handleSubmit]);

  // const isFormSubmitted = useMemo(() => {
  //   return (
  //     Object.keys(errors).length === 0 && Object.keys(memoizedValues).length > 0
  //   );
  // }, [errors, memoizedValues]);

  return (
    <FormContext.Provider value={memoizedContextValue}>
      {children}
    </FormContext.Provider>
  );
};

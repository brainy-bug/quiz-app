import React, { useEffect, useState } from "react";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
};
export const useForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Check if email field is empty
  const isEmailFieldEmpty = formData.email === "";

  // Check if password field is empty
  const isPasswordFieldEmpty = formData.password === "";

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setErrorMessage(null);
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  const clearPasswords = () => {
    setFormData((prevState) => ({
      ...prevState,
      password: "",
      confirmPassword: "",
    }));
  };

  useEffect(() => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  }, [formData.password, formData.confirmPassword]);

  return {
    formData,
    setFormData,
    errorMessage,
    passwordsMatch,
    setErrorMessage,
    handleChange,
    validatePassword,
    initialState,
    clearPasswords,
    isEmailFieldEmpty,
    isPasswordFieldEmpty,
  };
};

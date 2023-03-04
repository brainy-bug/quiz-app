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
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
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

  const clearFields = () => {
    setFormData(initialState);
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
    showPassword,
    toggleShowPassword,
    setFormData,
    errorMessage,
    passwordsMatch,
    setErrorMessage,
    handleChange,
    validatePassword,
    initialState,
    clearPasswords,
    clearFields,
  };
};

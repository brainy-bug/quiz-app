import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
};

export const useForm = (callback) => {
  const { authUser, authSignup, authError } = useAuth();
  const [formData, setFormData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Functions
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const validatePassword = (password) => {
    return password.length < 6
      ? "Password must be at least 6 characters long."
      : null;
  };

  const handlePasswordError = (error) => {
    setIsAuthenticating(false);
    setErrorMessage(error);
    setFormData((prevState) => ({
      ...prevState,
      password: "",
      confirmPassword: "",
    }));
  };

  const clearFields = (field) => {
    if (field === "password") {
      setFormData((prev) => ({
        ...prev,
        password: "",
      }));
    } else {
      setFormData(initialState);
    }
  };

  const handleSignup = () => {
    // handle validations
    const passwordError = validatePassword(formData.password);
    if (passwordError) handlePasswordError({ msg: passwordError });
    else if (!passwordsMatch)
      handlePasswordError({
        msg: "Sorry, the passwords you entered do not match, please try again.",
      });
    // If no issues authenticate signup
    else authSignup(formData);
  };

  const handleLogin = () => {
    const { email, password } = formData;
    // handle validations
    const passwordError = validatePassword(password);
    if (passwordError) handlePasswordError({ msg: passwordError });
    // If no issues authenticate user
    else authUser(email, password);
  };

  const handleSubmit = (event, formType) => {
    event.preventDefault();
    setIsAuthenticating(true);
    setErrorMessage(null);

    // Handle forms
    if (formType === "signup") handleSignup();
    else if (formType === "login") handleLogin();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (!errorMessage?.type ) setErrorMessage(null);
  };

  useEffect(() => {
    if (isAuthenticating) {
      const timeoutId = setTimeout(() => {
        setIsAuthenticating(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    } else if (!isAuthenticating) {
      if (authError) {
        setErrorMessage(authError);
        if (
          authError.type === "emailError" ||
          authError.type === "passwordError"
        ) {
          clearFields("password");
        } else clearFields();
      }
    }
  }, [isAuthenticating, authError]);

  useEffect(() => {
    if (errorMessage?.type === "otherErrors") {
      const timeoutId = setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (formData.password !== formData.confirmPassword)
      setPasswordsMatch(false);
    else setPasswordsMatch(true);
  }, [formData.password, formData.confirmPassword]);

  return {
    formData,
    showPassword,
    toggleShowPassword,
    errorMessage,
    handleChange,
    initialState,
    handleSubmit,
    setFormData,
    isAuthenticating,
  };
};

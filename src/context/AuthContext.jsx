import React, { createContext, useState, useMemo } from "react";
import axios from "axios";
import { LoginErrors } from "../data";
import { useLoading } from "../hooks/useLoading";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { setIsLoading } = useLoading();

  // handle user login
  const handleLogin = (email, password) => {
    setIsLoading(true);
    axios
      .post("https://example.com/login", { email, password })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setUser(response.data.username);
          setIsLoading(false);
        } else throw new Error();
      })
      .catch((err) => {
        if (response.status === 404) setError(LoginErrors.email);
        else if (response.status === 400) setError(LoginErrors.password);
        else setError({ msg: "An error occurred. Please try again later." });
      });
  };

  // handle user signup
  const handleSignup = (name, email, password) => {
    // make an API call to create a new user

    // if successful, update the user state
    setUser({ name, email });
  };

  // handle user logout
  const handleLogout = () => {
    // make an API call to log the user out

    // if successful, update the user state to null
    setUser(null);
  };

  // define the context value
  const contextValue = useMemo(
    () => ({
      user,
      handleLogin,
      handleSignup,
      handleLogout,
      error,
      setError,
    }),
    [user]
  );

  // return the provider with the context value and the App component
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

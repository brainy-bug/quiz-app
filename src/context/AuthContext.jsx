import React, { createContext, useState } from "react";

// create a new context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // console.log(children);
  const [user, setUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  // handle user login
  const handleLogin = (email, password) => {
    // make an API call to authenticate the user

    // if successful, update the user state
    setUser({ email });
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

  const handleGoogleLogin = () => {};

  // define the context value
  const contextValue = {
    user,
    handleLogin,
    handleSignup,
    handleLogout,
    handleGoogleLogin,
    isRegistered,
    setIsRegistered,
  };

  // return the provider with the context value and the App component
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

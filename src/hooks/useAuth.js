import { useState, useEffect } from "react";
import axios from "axios";
// import { LoginErrors } from "../data";
// import { useLoading } from "../hooks/useLoading";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  // customized errors
  const errors = {
    loginErrors: {
      email: {
        msg: `Sorry, we can't find an account with this email address.`,
        route: "/register",
        routeText: "create a new account",
        type: "emailError",
      },
      password: {
        msg: `Incorrect password `,
        route: "#",
        routeText: "reset your password.",
        type: "passwordError",
      },
    },
    otherErrors: {
      msg: "An error occurred. Please try again later.",
      type: "otherErrors",
    },
  };

  // handle user login
  const authUser = async (email, password) => {
    const { loginErrors, others } = errors;
    try {
      const { data, status } = await axios.post("/api/login", {
        loginId: email,
        password,
        noJWT: false,
        ipAddress: "127.0.0.1",
      });
      if (status === "ok") {
        // set user to username
        setUser(data.username);
      } else throw new Error();
    } catch (error) {
      if (error.response?.status === 404) setAuthError(loginErrors.email);
      else if (error.response?.status === 400)
        setAuthError(loginErrors.password);
      else setAuthError(otherErrors);
    }
  };

  // handle user signup
  const authSignup = async (formData) => {
    try {
      const { data, status } = await axios.post("/api/signup", {
        ...formData,
      });
      // if successful, update the user state
      if (status === "ok") setUser(data.username);
      else throw new Error();
    } catch (err) {
      // update the authError state
      setAuthError(errors.otherErrors);
    }
  };

  // handle user logout
  const handleLogout = () => {
    // make an API call to log the user out

    // if successful, update the user state to null
    setUser(null);
  };

  return {
    user,
    authUser,
    authSignup,
    handleLogout,
    authError,
    setAuthError,
  };
};

import { Link } from "react-router-dom";

// components
import styled from "styled-components";
import EmailAndPasswordFields from "./EmailAndPasswordFields";
import FormHeading from "./FormHeading";
import FormFooter from "./FormFooter";
import FormButton from "./FormButton";
import Error from "./Error";

import LoginSVG from "../assets/misc/login.svg";
import { useForm } from "../hooks/useForm";
import { useAuth } from "../hooks/useAuth";

const LoginForm = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    errorMessage,
    showPassword,
    toggleShowPassword,
    isAuthenticating,
  } = useForm();
  const { msg, route, routeText } = errorMessage || {};

  return (
    <div id='form-container'>
      <MainForm id='form' onSubmit={(event) => handleSubmit(event, "login")}>
        <FormHeading image={LoginSVG} text='Sign in' />
        {msg && (
          <Error>
            {` ${msg}`}
            {route && (
              <>
                {` Please try again or `}
                <Link to={route}>{routeText}</Link>
              </>
            )}
          </Error>
        )}
        <EmailAndPasswordFields
          {...formData}
          handleChange={handleChange}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <FormButton isAuthenticating={isAuthenticating} text='Continue' />
        <FormFooter
          text='New to the app'
          route='/register'
          routeText='Register'
        />
      </MainForm>
    </div>
  );
};

const MainForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    align-self: center;
    height: 250px;
    width: 250px;
    margin: 0;
  }

  @media screen and (min-width: 580px) {
    width: 80%;
  }
`;

export default LoginForm;

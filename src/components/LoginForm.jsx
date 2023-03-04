// components
import styled from "styled-components";
import EmailAndPasswordFields from "./EmailAndPasswordFields";
import FormHeading from "./FormHeading";
import FormFooter from "./FormFooter";

// contexts
import { useAuth } from "../hooks/useAuth";

import LoginSVG from "../assets/misc/login.svg";
import Error from "./Error";
import { Link } from "react-router-dom";
// import { useFormContext } from "../hooks/useFormContext";
import { useForm } from "../hooks/useForm";
import { useLoading } from "../hooks/useLoading";

const LoginForm = () => {
  const { handleLogin } = useAuth();
  const {
    formData,
    handleChange,
    setFormData,
    initialState,
    showPassword,
    toggleShowPassword,
  } = useForm();
  const { email, password } = formData;

  const { isLoading } = useLoading();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleLogin(email, password);
    // if (errorMessage) {
    // }
    setFormData(initialState);
  };

  // if (!isLoading) {
  //   // const { errorMessage } = error;
  // }
  return (
    <div id='form-container'>
      <Form id='form' onSubmit={handleSubmit}>
        <FormHeading image={LoginSVG} text='Sign in' />
        {/* {errorMessage && (
          <Error>
            {errorMessage} or <Link to='/register'>create a new account.</Link>
          </Error>
        )} */}
        <EmailAndPasswordFields
          {...formData}
          handleChange={handleChange}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <button className='submit-btn'>Continue</button>
        <FormFooter
          text='New to the app'
          route='/register'
          routeText='Register'
        />
      </Form>
    </div>
  );
};

const Form = styled.form`
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

import React, { useNavigate } from "react";

// components
import styled from "styled-components";
import EmailPasswordInput from "./EmailPasswordInput";
import FormHeading from "./FormHeading";
import FormFooter from "./FormFooter";
import Error from "./Error";

// import icons
import { IoMdPerson } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";

import SignupSVG from "../assets/misc/registration.svg";

// contexts
import { useForm } from "../hooks/useForm";
import { useAuth } from "../hooks/useAuth";

const RegisterForm = () => {
  const {
    formData,
    handleChange,
    errorMessage,
    setErrorMessage,
    passwordsMatch,
    validatePassword,
    initialState,
    setFormData,
    clearPasswords,
  } = useForm();
  // const { handleSignup } = useAuth();

  const { username, confirmPassword, password } = formData;
  const roles = ["teacher", "student"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordError = validatePassword(password);
    if (passwordError) {
      setErrorMessage(passwordError);
      clearPasswords();
    } else if (!passwordsMatch) {
      setErrorMessage(
        "Sorry, the passwords you entered do not match, please try again."
      );
      clearPasswords();
    }
    // leSignup(...formData);
    else {
      setFormData(initialState);
    }
  };

  return (
    <div id='form-container'>
      <FormHeading image={SignupSVG} text='Create Your Account' />
      {errorMessage && <Error>{errorMessage}</Error>}
      <Form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='text'>{<IoMdPerson />}</label>
          <input
            className='form-input'
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            placeholder='Username'
            required={true}
          />
        </div>
        <EmailPasswordInput {...formData} handleChange={handleChange} />
        <div className='input-container'>
          <label htmlFor='confirmPassword'>{<MdOutlinePassword />}</label>
          <input
            className='form-input'
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            placeholder='confirm password'
            required={true}
          />
        </div>
        <RadioContainer>
          <RoleText>Current role in education:</RoleText>
          {roles.map((role, index) => (
            <div key={index}>
              <RadioInput
                type='radio'
                id={role}
                name='role'
                value={role}
                onChange={handleChange}
                required={true}
              />
              <Label htmlFor={role}>{role}</Label>
            </div>
          ))}
        </RadioContainer>
        <Button className='submit-btn'>
          <CgSpinner />
          Get Started
        </Button>
        <FormFooter
          text='Have an account?'
          route='/login'
          routeText='Sign in'
        />
      </Form>
    </div>
  );
};

const Form = styled.form`
  width: inherit;
  @media screen and (max-width: 680px) {
    /* Below 680px */
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 680px) and (max-width: 901px) {
    /* Between 680px and 900px */
    width: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-column-gap: 20px;
  }

  @media screen and (min-width: 1081px) {
    /* Above 1080px */
    width: auto;
    display: grid;
    grid-template-columns: repeat(2, 1.3fr);
    grid-gap: 10px;
    grid-column-gap: 20px;
  }

  p {
    grid-column: span 2;
  }
`;

const Button = styled.button`
  grid-column: span 2;
`;

const RadioContainer = styled.div`
  margin-right: 16px;
  margin-bottom: 0px;
  grid-column: span 2;

  div {
    margin-bottom: 10px;
    color: #091322;
    opacity: 0.7;
  }
`;

const Label = styled.label`
  margin-left: 6px;
  color: #091322;
  font-size: 18px;
  text-transform: capitalize;
`;

const RadioInput = styled.input`
  margin-right: 4px;
`;

const RoleText = styled.h2`
  margin-bottom: 16px;
  color: #091322;
  opacity: 0.7;
  font-size: 20px;
  align-self: flex-start;
  text-transform: none;
`;

export default RegisterForm;

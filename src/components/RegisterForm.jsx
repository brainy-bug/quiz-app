import React, { useNavigate } from "react";

// components
import styled from "styled-components";
import EmailAndPasswordFields from "./EmailAndPasswordFields";
import FormHeading from "./FormHeading";
import FormFooter from "./FormFooter";
import FormButton from "./FormButton";
import Error from "./Error";

// import icons
import { IoMdPerson } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";

import SignupSVG from "../assets/misc/registration.svg";

// hooks
import { useForm } from "../hooks/useForm";
import { useAuth } from "../hooks/useAuth";

const RegisterForm = () => {
  const {
    formData,
    showPassword,
    toggleShowPassword,
    errorMessage,
    handleChange,
    handleSubmit,
    isAuthenticating,
  } = useForm();
  // const { isAuthenticating } = useAuth();

  const { username, confirmPassword } = formData;
  const roles = ["teacher", "student"];
  const { msg } = errorMessage || {};

  return (
    <div id='form-container'>
      <FormHeading image={SignupSVG} text='Create Your Account' />
      {msg && <Error>{msg}</Error>}

      <MainForm onSubmit={(event) => handleSubmit(event, "signup")}>
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
        <EmailAndPasswordFields
          {...formData}
          handleChange={handleChange}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <div className='input-container'>
          <label htmlFor='confirmPassword'>{<MdOutlinePassword />}</label>
          <input
            className='form-input'
            type={showPassword ? "text" : "password"}
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
                checked={formData.role === role}
                required={true}
              />
              <Label htmlFor={role}>{role}</Label>
            </div>
          ))}
        </RadioContainer>
        <FormButton isAuthenticating={isAuthenticating} text='Get started' />
        <FormFooter
          text='Have an account?'
          route='/login'
          routeText='Sign in'
        />
      </MainForm>
    </div>
  );
};

// styled components
const MainForm = styled.form`
  width: inherit;
  @media screen and (max-width: 680px) {
    /* Below 680px */
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 680px) and (max-width: 901px) {
    /* Between 680px and 900px */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-column-gap: 20px;
  }

  @media screen and (min-width: 1081px) {
    /* Above 1080px */
    display: grid;
    grid-template-columns: repeat(2, 1.3fr);
    grid-gap: 10px;
    grid-column-gap: 20px;
  }

  p {
    grid-column: span 2;
  }
`;

const RadioContainer = styled.div`
  margin-right: 16px;
  grid-column: span 2;

  div {
    display: flex;
    margin-bottom: 10px;
    color: #091322;
    opacity: 0.7;
  }
`;

const Label = styled.label`
  margin-left: 6px;
  color: #091322;
  font-size: 16px;
  text-transform: capitalize;
`;

const RadioInput = styled.input`
  margin-right: 4px;
`;

const RoleText = styled.h2`
  margin-bottom: 16px;
  color: #091322;
  opacity: 0.7;
  font-size: 18px;
  align-self: flex-start;
  text-transform: none;
`;

export default RegisterForm;

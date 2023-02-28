import { useNavigate } from "react";

import styled from "styled-components";

// import icons
import { IoMdPerson, IoMdLock } from "react-icons/io";

import { GrMail } from "react-icons/gr";

//import components
import {
  FormButton,
  FormContainer,
  FormFooter,
  FormInput,
  FormHeading,
} from "../Form";

// svg
import SignupSVG from "../../assets/misc/registration.svg";

// context
import { useFormContext } from "../../hooks/useFormContext";

const RegisterContainer = () => {
  const {
    email,
    password,
    handleSignup,
    setPassword,
    name,
    setEmail,
    setName,
  } = useFormContext();

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(email, password);
    // if (user) navigate("./dashboard");
  };

  return (
    <FormContainer>
      <FormHeading SignupSVG={SignupSVG} />
      <form>
        <FormInput
          text='text'
          value={name}
          setValue={setName}
          icon={<IoMdPerson />}
          placeholderText='Username'
        />
        <FormInput
          text='email'
          value={email}
          setValue={setEmail}
          icon={<GrMail />}
          placeholderText='Email Address'
        />
        <FormInput
          text='password'
          value={password}
          setValue={setPassword}
          icon={<IoMdLock />}
          placeholderText='password'
        />
        <FormInput
          text='confrimPassword'
          value={password}
          setValue={setPassword}
          icon={<IoMdLock />}
          placeholderText='confirm password'
        />
        <RadioContainer>
          <Text>What are you?</Text>
          <div>
            <RadioInput type='radio' id='teacher' name='role' value='teacher' />
            <Label htmlFor='teacher'>Teacher</Label>
          </div>
          <div>
            <RadioInput type='radio' id='student' name='role' value='student' />
            <Label htmlFor='student'>Student</Label>
          </div>
        </RadioContainer>
        <FormButton handleSubmit={handleSubmit}>Get Started</FormButton>
      </form>
      <FormFooter text='Have an account?' route='/login' linkText='Log in' />
    </FormContainer>
  );
};

const RadioContainer = styled.div`
  align-items: center;
  justify-content: space-evenly;
  margin-right: 16px;
  margin-bottom: 22px;

  div {
    margin-bottom: 10px;
    color: #091322;
    opacity: 0.7;
  }
`;

const Label = styled.label`
  margin-left: 6px;
  color: #091322;
  font-size: 16px;
`;

const RadioInput = styled.input`
  margin-right: 4px;
`;

const Text = styled.h2`
  margin-bottom: 16px;
  color: #091322;
  opacity: 0.7;
  font-size: 16px;
  align-self: flex-start;
  text-transform: none;
`;

export default RegisterContainer;

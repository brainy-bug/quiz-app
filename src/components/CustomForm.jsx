import React, { useNavigate } from "react";

import styled from "styled-components";

// import icons
import { IoMdPerson, IoMdLock } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import { GrMail } from "react-icons/gr";

// contexts
import { useFormContext } from "../hooks/useFormContext";
import { useAuth } from "../hooks/useAuth";

const CustomForm = React.memo(() => {
  const { name, email, password, confirmPassword, handleChange } =
    useFormContext();
  const { handleSignup, handleLogin, isRegistered } = useAuth();
  const roles = ["teacher", "student"];
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistered) handleSignup(email, password);
    else handleLogin(email, password);
    // if (user) navigate("./dashboard");

    // axios
    //   .post("/api/submit-form", formData)
    //   .then((response) => {
    //     console.log(response.data);
    //     // do something with successful response
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //     setErrors(error.response.data);
    //   });.0
  };

  return (
    <form>
      {isRegistered || (
        <InputContainer>
          <Icon htmlFor='text'>{<IoMdPerson />}</Icon>
          <Input
            type='text'
            name='text'
            value={name}
            onChange={handleChange}
            placeholder='Username'
            required={true}
          />
        </InputContainer>
      )}
      <InputContainer>
        <Icon htmlFor='email'>{<GrMail />}</Icon>
        <Input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='email address'
          required={true}
        />
      </InputContainer>
      <InputContainer>
        <Icon htmlFor='password'>{<IoMdLock />}</Icon>
        <Input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='password'
          required={true}
        />
      </InputContainer>
      {errors.password && <p className='error'>{errors.password}</p>}
      {isRegistered || (
        <>
          <InputContainer>
            <Icon htmlFor='confirmPassword'>{<MdOutlinePassword />}</Icon>
            <Input
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
              placeholder='confirm password'
              required={true}
            />
          </InputContainer>
          <RadioContainer>
            <RoleText>Current role in education:</RoleText>
            {roles.map((role) => (
              <div key={role}>
                <RadioInput
                  type='radio'
                  id={role}
                  name='role'
                  value={role}
                  // checked={role === role}
                  onChange={handleChange}
                  required={true}
                />
                <Label htmlFor={role}>{role}</Label>
              </div>
            ))}
          </RadioContainer>
        </>
      )}
      <Button type='submit' className='submit-btn' onClick={handleSubmit}>{`${
        isRegistered ? "Continue" : "Get Started"
      }`}</Button>
    </form>
  );
});

const InputContainer = styled.div`
  display: flex;
`;

const Icon = styled.label`
  margin-right: 0.75rem;
  font-size: 1.3rem;
`;

const Input = styled.input`
  color: #ad40af;
  flex: 1;
  border: none;
  border-bottom: 1px solid #adacac;
  padding-bottom: 5px;
  margin-bottom: 25px;
  outline: none;
  font-size: 1.2rem;

  &::placeholder {
    color: #adacac;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  margin-top: 0.5rem;
  margin-bottom: 10px;
`;

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
  text-transform: capitalize;
`;

const RadioInput = styled.input`
  margin-right: 4px;
`;

const RoleText = styled.h2`
  margin-bottom: 16px;
  color: #091322;
  opacity: 0.7;
  font-size: 16px;
  align-self: flex-start;
  text-transform: none;
`;

export default CustomForm;

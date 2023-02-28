import { useNavigate, useMemo } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

// import icons
import { IoMdPerson, IoMdLock } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";

import { GrMail } from "react-icons/gr";

// svg
import SignupSVG from "../assets/misc/registration.svg";
import LoginSVG from "../assets/misc/login.svg";

// context
import { useFormContext } from "../hooks/useFormContext";
import { useAuth } from "../hooks/useAuth";

const LoginRegisterContainer = () => {
  const { handleSignup, handleLogin, isRegistered } = useAuth();
  const {
    name,
    email,
    password,
    confirmPassword,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
  } = useFormContext();

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistered) handleSignup(email, password);
    else handleLogin(email, password);
    // if (user) navigate("./dashboard");
  };

  return (
    <Container id='section2'>
      <Image src={isRegistered ? LoginSVG : SignupSVG} alt='login-svg' />
      <Text id='loginHeading'>
        {isRegistered ? "Sign in to Your Account" : "Create Your Account"}
      </Text>
      <form>
        {isRegistered || (
          <InputContainer>
            <Icon htmlFor='text'>{<IoMdPerson />}</Icon>
            <Input
              type='text'
              id='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Username'
              required={true}
            />
          </InputContainer>
        )}
        <InputContainer>
          <Icon htmlFor='email'>{<GrMail />}</Icon>
          <Input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email address'
            required={true}
          />
        </InputContainer>
        <InputContainer>
          <Icon htmlFor='password'>{<IoMdLock />}</Icon>
          <Input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            required={true}
          />
        </InputContainer>
        {isRegistered || (
          <>
            <InputContainer>
              <Icon htmlFor='confirmPassword'>{<MdOutlinePassword />}</Icon>
              <Input
                type='password'
                id='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='confirm password'
                required={true}
              />
            </InputContainer>
            <RadioContainer>
              <RoleText>Current role in education:</RoleText>
              <div>
                <RadioInput
                  type='radio'
                  id='teacher'
                  name='role'
                  value='teacher'
                  required={true}
                />
                <Label htmlFor='teacher'>Teacher</Label>
              </div>
              <div>
                <RadioInput
                  type='radio'
                  id='student'
                  name='role'
                  value='student'
                />
                <Label htmlFor='student'>Student</Label>
              </div>
            </RadioContainer>
          </>
        )}
        <Button type='submit' className='submit-btn' onClick={handleSubmit}>{`${
          isRegistered ? "Continue" : "Get Started"
        }`}</Button>
      </form>
      <Paragraph>
        {`${isRegistered ? "Have an account?" : "New to the app"}`}
        <StyledLink to={`${isRegistered ? "/register" : "/login"}`}>
          {`${isRegistered ? "Register" : "Log in"}`}
        </StyledLink>
      </Paragraph>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: var(--max-width);
  /* padding-bottom: 5rem; */
  /* margin: 45px auto; */
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 2rem;
  opacity: 1;
  height: 100vh;

  form {
    width: 100%;
  }

  @media screen and (min-width: 575px) {
    margin: 0px auto;
    max-width: 400px;
  }
`;

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
  padding-bottom: 8px;
  margin-bottom: 25px;
  outline: none;
  font-size: 0.8rem;

  &::placeholder {
    color: #adacac;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
`;

const Image = styled.img`
  height: 210px;
  width: 210px;
  transform: rotate(-5deg);
`;

const Text = styled.h2`
  font-family: "Roboto-Medium";
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-top: 1.5rem;
  margin-bottom: 30px;
  align-self: flex-start;
`;
const StyledLink = styled(Link)`
  color: #ad40af;
  margin-left: 10px;
  font-weight: 600;
`;
const Paragraph = styled.p`
  color: #091322;
  opacity: 0.7;
  margin: 0px;
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

export default LoginRegisterContainer;

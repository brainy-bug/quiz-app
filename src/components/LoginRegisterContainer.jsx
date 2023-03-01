import { Link } from "react-router-dom";


// components
import CustomForm from "./CustomForm";
import styled from "styled-components";


// svg
import SignupSVG from "../assets/misc/registration.svg";
import LoginSVG from "../assets/misc/login.svg";

// context
import { useAuth } from "../hooks/useAuth";

const LoginRegisterContainer = () => {
  const { isRegistered } = useAuth();

  return (
    <Container name='section2'>
      <Image src={isRegistered ? LoginSVG : SignupSVG} alt='login-svg' />
      <Text name='loginHeading'>
        {isRegistered ? "Sign in to Your Account" : "Create Your Account"}
      </Text>
      <CustomForm />
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
  height: 100vh;
  max-width: var(--max-width);
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 2rem;
  opacity: 1;

  form {
    width: 100%;
  }

  @media screen and (min-width: 575px) {
    margin: 0 auto;
    max-width: 500px;
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
  margin-top: 2rem;
  margin-bottom: 20px;
  /* align-self: flex-start; */
`;
const StyledLink = styled(Link)`
  color: #ad40af;
  margin-left: 10px;
  font-weight: 600;
`;
const Paragraph = styled.p`
  color: #091322;
  opacity: 0.7;
  margin: 0;
`;

export default LoginRegisterContainer;

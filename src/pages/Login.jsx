import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ScrollToTop from "../components/ScrollToTop";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";

import quizIcon from "../assets/quiz-icon.png";
import LoginContainer from "../components/Containers/LoginContainer";
import SideContainer from "../components/Containers/SideContainer";

const Login = () => {
  return (
    <Container>
      <ScrollToTop />
      <SideContainer>
        <img src={quizIcon} alt='quiz-icon' />
        <Heading>Welcome to our quiz app</Heading>
        <Text>
          Test your knowledge on a variety of topics from history to pop
          culture.
        </Text>
        <Text>
          Create an account to{" "}
          <span style={{ color: "#ad40af" }}>save your progress</span>,{" "}
          <span style={{ color: "#00bbd4" }}>track your scores</span>, and{" "}
          <span style={{ color: "#d4a200" }}>compete with others.</span>
        </Text>
        <Button to='section2' smooth={true} duration={500}>
          <FaArrowCircleDown />
        </Button>
      </SideContainer>
      <LoginContainer />
    </Container>
  );
};

const Container = styled.section`
  display: grid;

  @media screen and (min-width: 650px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

const Heading = styled.h2`
  color: #f3f3f3;
  font-size: 1.8rem;
  padding: 0rem 1rem;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  color: #f3f3f3;
  padding: 0rem 1rem;
  font-size: 1.3rem;

  @media screen and (min-width: 680px) {
    padding: 0rem 3rem;
    font-size: 1.5rem;
  }
`;

const Button = styled(Link)`
  display: block;
  color: #f3f3f3;
  font-size: 2rem;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 650px) {
    display: none;
  }
`;

export default Login;

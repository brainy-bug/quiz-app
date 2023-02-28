import styled from "styled-components";
import ScrollToTop from "../components/ScrollToTop";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";

import waveIcon from "../assets/wave-icon.png";
import LoginContainer from "../components/Containers/LoginContainer";
import SideContainer from "../components/Containers/SideContainer";

const Login = () => {
  return (
    <Container>
      <ScrollToTop />
      <SideContainer>
        <img src={waveIcon} alt='quiz-icon' />
        <Heading>Welcome back</Heading>
        <Text>
          Kick off from where you left.
        </Text>
        <Link to='section2' smooth={true} duration={500}>
          <FaArrowCircleDown />
        </Link>
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
  font-size: 1.4rem;

  @media screen and (min-width: 680px) {
    padding: 0rem 3rem;
    font-size: 1.5rem;
  }
`;

export default Login;

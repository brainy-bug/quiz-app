import styled from "styled-components";
import RegisterContainer from "../components/Containers/RegisterContainer";
import SideContainer from "../components/Containers/SideContainer";
import ScrollToTop from "../components/ScrollToTop";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";

import quizIcon from "../assets/quiz-icon.png";
const Register = () => {
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
        <Link to='section2' smooth={true} duration={500}>
          <FaArrowCircleDown />
        </Link>
      </SideContainer>
      <RegisterContainer />
    </Container>
  );
};

const Container = styled.section`
  display: grid;

  @media screen and (min-width: 680px) {
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


export default Register;

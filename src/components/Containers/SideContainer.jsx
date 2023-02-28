import styled from "styled-components";

import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";

import quizIcon from "../../assets/quiz-icon.png";

import coverImage from "../../assets/bg-cover.jpeg";

const SideContainer = () => {
  return (
    <Container>
      <img src={quizIcon} alt='quiz-icon' />
      <Heading>Welcome to our quiz app</Heading>
      <Text>
        Test your knowledge on a variety of topics from history to pop culture.
      </Text>
      <Line />
      <Text>
        Create an account to{" "}
        <span style={{ color: "#ad40af" }}>save your progress</span>,{" "}
        <span style={{ color: "#00bbd4" }}>track your scores</span>, and{" "}
        <span style={{ color: "#d4a200" }}>compete with others.</span>
      </Text>
      <Button to='section2' smooth={true} duration={500}>
        <FaArrowCircleDown />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #14274457;
    z-index: -1;
  }
  position: relative;
  width: 100%;
  height: 100vh;

  background-color: #091322;
  background-image: url(${coverImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;

  img {
    height: 130px;
    width: 150px;
    /* align-self: center; */
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

const Line = styled.div`
  /* align-self: center; */
  border-bottom: 1px solid #f3f3f3;
`;

const Button = styled(Link)`
  display: block;
  color: #f3f3f3;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 650px) {
    display: none;
  }
`;

export default SideContainer;

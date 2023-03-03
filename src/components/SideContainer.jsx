import { Link } from "react-scroll";
import { FaArrowCircleDown } from "react-icons/fa";

import styled from "styled-components";

import coverImage from "../assets/bg-cover.jpeg";
import quizIcon from "../assets/quiz-icon.png";

const SideContainer = ({ children }) => {
  return (
    <Container>
      <img src={quizIcon} alt='quiz-icon' />
      {children}
      <Link to='form-container' smooth={true} duration={500}>
        <FaArrowCircleDown />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(20, 39, 68, 0.34);
    z-index: -1;
  }

  background-color: #091322;
  background-image: url(${coverImage});
  background-position: no-repeat;
  background-size: cover;

  img {
    height: 130px;
    width: 150px;
    margin: 1rem auto;
  }

  a {
    display: block;
    color: #f3f3f3;
    font-size: 2rem;
    cursor: pointer;
    margin-bottom: 16px;

    &:hover {
      opacity: 0.7;
    }

    @media screen and (min-width: 900px) {
      display: none;
    }
  }
`;


export default SideContainer;

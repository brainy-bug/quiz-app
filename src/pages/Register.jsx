import { useEffect, useMemo } from "react";

// components
import styled from "styled-components";
import Loader from "../components/Loader";
import RegisterForm from "../components/RegisterForm";
import SideContainer from "../components/SideContainer";
import ScrollToTop from "../components/ScrollToTop";

// hooks
import { useLoading } from "../hooks/useLoading";

const Register = () => {
  const { isLoading, handlePageLoad } = useLoading();

  useEffect(() => {
    handlePageLoad();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className='section register'>
      <ScrollToTop />
      <SideContainer>
        <div className='heading'>
          <h2>
            Welcome to our <span style={{ color: "#00bbd4" }}>quiz</span>{" "}
            <span style={{ color: "#d4a200" }}>App</span>
          </h2>
        </div>
        <div className='desc'>
          <p>By creating an account on our quiz platform, you can:</p>
          <ul className='lists'>
            <List>Put your knowledge to tests and compete with others.</List>
            <List>Track your scores</List>
          </ul>
          <Footer>
            As a teacher, you can create your own quizzes to share with your
            students and{" "}
            <span style={{ color: "#d4a200" }}>track their progress.</span>
          </Footer>
        </div>
      </SideContainer>
      <RegisterForm />
    </section>
  );
};

// const Heading = styled.h2`
//   color: #f3f3f3;
//   font-size: 2rem;
//   padding: 0rem 2rem;
//   text-transform: uppercase;
//   text-align: center;
//   @media screen and (min-width: 1080px) {
//     font-size: 2.3rem;
//   }

//   @media screen and (min-width: 680px) and (max-width: 900px) {
//     font-size: 2.6rem;
//   }
// `;


const Footer = styled.p`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.3;
  text-align: center;
`;
const List = styled.li`
  color: #c2c1c1;
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: 100;
  margin-bottom: 10px;
`;
export default Register;

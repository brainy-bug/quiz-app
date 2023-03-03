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
    <section className='section'>
      <ScrollToTop />
      <SideContainer>
        <HeadingContainer>
          <Heading>
            Welcome to our <span style={{ color: "#00bbd4" }}>quiz</span>{" "}
            <span style={{ color: "#d4a200" }}>App</span>
          </Heading>
        </HeadingContainer>
        <DescriptionContainer>
          <SubHeading>
            By creating an account on our quiz platform, you can:
          </SubHeading>
          <ListsContainer>
            <List>Put your knowledge to tests and compete with others.</List>
            <List>Track your scores.</List>
          </ListsContainer>
          <Footer>
            As a teacher, you can create your own quizzes to share with your
            students and{" "}
            <span style={{ color: "#d4a200" }}>track their progress.</span>
          </Footer>
        </DescriptionContainer>
      </SideContainer>
      <RegisterForm />
    </section>
  );
};

// styled components

const HeadingContainer = styled.div`
  padding: 0rem 1rem;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 1080px) {
    font-size: 2.3rem;
  }

  @media screen and (min-width: 680px) and (max-width: 900px) {
    font-size: 2.6rem;
  }
`;

const Heading = styled.h2`
  color: #fcf9f9;
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  @media screen and (min-width: 580px) {
    padding: 0rem 1rem;
    margin-bottom: 1.8rem;
  }
`;

const DescriptionContainer = styled.div`
  margin-bottom: 1rem;
  color: #f3f3f3;
  padding: 0 1rem;
`;

const SubHeading = styled.p`
  padding: 0rem 1rem;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  line-height: 1.2;

  @media screen and (min-width: 900px) {
    align-self: flex-start;
    font-size: 1.5rem;
  }
`;

const ListsContainer = styled.ul`
  margin-bottom: 10px;
  margin-left: 3.5rem;
  @media screen and (min-width: 580px) {
    font-size: 1.5rem;
  }
`;

const List = styled.li`
  color: #d4d3d3;
  font-size: 1.2rem;
  letter-spacing: 2px;
  line-height: 1.2;
  font-weight: 200;
  margin-bottom: 20px;
  @media screen and (min-width: 580px) {
    font-size: 1.3rem;
  }
`;

const Footer = styled.p`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.3;
  text-align: center;
  @media screen and (min-width: 580px) {
    align-self: flex-start;
    font-size: 1.5rem;
  }
`;

export default Register;

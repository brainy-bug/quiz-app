import { useEffect } from "react";

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
    <main>

    <Container className=''>
      <ScrollToTop />
      <SideContainer>
        <Heading>
          Welcome to our <span> quiz app</span>
        </Heading>
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
      </SideContainer>
      <RegisterForm />
    </Container>
    </main>
  );
};

const Container = styled.section`
  display: grid;

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1.3fr;
  }
`;

const Heading = styled.h2`
  color: #f3f3f3;
  font-size: 2rem;
  padding: 0rem 2rem;
  text-transform: uppercase;
  text-align: center;
  @media screen and (min-width: 1080px) {
    font-size: 2.3rem;
  }

  @media screen and (min-width: 680px) and (max-width: 901px) {
    font-size: 2.6rem;
  }
`;

const Text = styled.p`
  color: #f3f3f3;
  padding: 0rem 1rem;
  font-size: 1.3rem;
  text-align: center;

  @media screen and (min-width: 680px) {
    padding: 0rem 3rem;
    font-size: 1.5rem;
  }
`;

export default Register;

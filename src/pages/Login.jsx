import { useEffect } from "react";

// components
import styled from "styled-components";
import ScrollToTop from "../components/ScrollToTop";
import Loader from "../components/Loader";
import SideContainer from "../components/SideContainer";
import LoginForm from "../components/LoginForm";

// hooks
import { useLoading } from "../hooks/useLoading";

const Login = () => {
  const { isLoading, handlePageLoad } = useLoading();

  useEffect(() => {
    handlePageLoad();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <ScrollToTop />
      <SideContainer>
        <Heading>Yello👋, Welcome back!</Heading>
        <Text>
          Test your knowledge on a variety of topics from history to pop
          culture.
        </Text>
      </SideContainer>
      <LoginForm />
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  /* grid-template-columns: 1.2fr 1fr; */

  @media screen and (min-width: 650px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

const Heading = styled.h2`
  color: #f3f3f3;
  font-size: 2rem;
  padding: 0rem 1rem;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 800px) {
    font-size: 2.5rem;
  }
`;

const Text = styled.p`
  color: #f3f3f3;
  padding: 0rem 1rem;
  font-size: 1.4rem;
  text-align: center;

  @media screen and (min-width: 680px) {
    padding: 0rem 3rem;
    font-size: 1.5rem;
  }
`;

export default Login;

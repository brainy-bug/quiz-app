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
    <section className='section login'>
      <ScrollToTop />
      <SideContainer>
        <div className='heading'>
          <h2>Yello👋,</h2>
          <h2>
            Welcome back to our <span style={{ color: "#00bbd4" }}>quiz</span>{" "}
            <span style={{ color: "#d4a200" }}>App</span>
          </h2>
        </div>
        <Text>
          We're glad to see you again. Let's get started with some more
          questions and see how you do this time around.
        </Text>
      </SideContainer>
      <LoginForm />
    </section>
  );
};

const Text = styled.p`
  color: #c2c1c1;
  padding: 0rem 1rem;
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.2;
  font-weight: 100;

  @media screen and (min-width: 680px) {
    padding: 0rem 3rem;
    font-size: 1.4rem;
  }
`;

export default Login;

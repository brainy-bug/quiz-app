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
          <p className='footer'>
            As a teacher, you can create your own quizzes to share with your
            students and{' '}
            <span style={{ color: "#d4a200" }}>track their progress.</span>
          </p>
        </div>
      </SideContainer>
      <RegisterForm />
    </section>
  );
};

export default Register;

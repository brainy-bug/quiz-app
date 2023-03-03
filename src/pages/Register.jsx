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
          <div>
            <List>
              <p>Put your knowledge to tests and compete with others.</p>
            </List>
            <List>
              <p>Track your scores.</p>
            </List>
          </div>
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
  margin-bottom: 2rem;
  font-size: 1.3rem;
  line-height: 1.2;

  @media screen and (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

const List = styled.div`
  background-color: #fec6ff;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0 0 28px;
  color: #091322;

  p {
    display: table-cell;
    vertical-align: middle;
    font-size: 1.2rem;
    letter-spacing: 2px;
    line-height: 1.2;
  }
`;

const Footer = styled.p`
  /* margin-top: 2rem;
  margin-bottom: 1rem; */
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.3;
  text-align: center;
  @media screen and (min-width: 580px) {
    font-size: 1.5rem;
  }
`;

export default Register;

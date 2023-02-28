// import components
import styled from "styled-components";
import LinkButton from "../components/LinkButton";

// import assets
import quizIcon from "../assets/quiz-icon.png";

const Home = () => {
  return (
    <Container>
      <Heading>
        <img src={quizIcon} alt='quiz-icon' />
        <h2>quiz app</h2>
        <p>Sign in or Register to continue</p>
      </Heading>
      <div>
        <LinkButton route='login'>sign in</LinkButton>
        <LinkButton route='register'>register</LinkButton>
      </div>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #091322;
  height: 100vh;

  p {
    font-size: 16px;
    color: #f3f3f3;
    opacity: 0.7;
  }

  img {
    height: 160px;
    width: 180px;
  }

  h2 {
    margin-top: 1rem;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  color: #f3f3f3;
`;

export default Home;

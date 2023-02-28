import styled from "styled-components";
import RegisterContainer from "../../components/Containers/RegisterContainer";
import SideContainer from "../../components/Containers/SideContainer";

const Register = () => {
  return (
    <Container>
      <SideContainer />
      <RegisterContainer />
    </Container>
  );
};

const Container = styled.section`
  display: grid;

  @media screen and (min-width: 680px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

export default Register;

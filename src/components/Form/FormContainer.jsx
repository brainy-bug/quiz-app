import styled from "styled-components";

const FormContainer = ({ children }) => {
  return <Container id='section2'>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: var(--max-width);
  margin: 0px auto;
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 2rem;
  opacity: 1;

  form {
    width: 100%;
  }
  
  @media screen and (min-width: 575px) {
    max-width: 400px;
  }
`;

export default FormContainer;

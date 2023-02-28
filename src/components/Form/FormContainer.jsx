import styled from "styled-components";

const FormContainer = ({ children }) => {
  return <Container id='section2'>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: var(--max-width);
  margin: 45px auto;
  /* padding-bottom: 5rem; */
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 2rem;
  opacity: 1;

  form {
    width: 100%;
  }

  @media screen and (min-width: 575px) {
    max-width: 400px;
    height: 100vh;
  }
`;

export default FormContainer;

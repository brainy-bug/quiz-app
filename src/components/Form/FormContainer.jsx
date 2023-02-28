import styled from "styled-components";

const FormContainer = ({ children }) => {
  return <Container id='section2'>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: var(--max-width);
  /* padding-bottom: 5rem; */
  /* margin: 45px auto; */
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 2rem;
  opacity: 1;
  height: 100vh;

  form {
    width: 100%;
  }

  @media screen and (min-width: 575px) {
    margin: 0px auto;
    max-width: 400px;
  }
`;

export default FormContainer;

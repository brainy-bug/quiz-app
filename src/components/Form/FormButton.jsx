import styled from "styled-components";

function FormButton({ children, handleSubmit }) {
  return (
    <Button type='submit' className='submit-btn' onClick={handleSubmit}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  margin-top: 0.5rem;
  margin-bottom: 10px;
`;

export default FormButton;

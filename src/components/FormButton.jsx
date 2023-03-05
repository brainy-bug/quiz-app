import styled from "styled-components";

import { FaSpinner } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

const FormButton = ({ isAuthenticating, text }) => {
  return (
    <Button className='submit-btn' type='submit' disabled={isAuthenticating}>
      {isAuthenticating ? <FaSpinner className='spin' /> : `${text}`}
    </Button>
  );
};

const Button = styled.button`
  grid-column: span 2;
`;

export default FormButton;

import { Link } from "react-router-dom";
import styled from "styled-components";

function LinkButton({ children, route }) {
  return (
    <Link to={`/${route}`}>
      <Button>{children}</Button>
    </Link>
  );
}

const Button = styled.button`
  color: var(--clr-grey-1);
  margin-left: 5px;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 16px;
  text-transform: capitalize;
  background-color: var(--clr-primary-8);
  font-weight: 500;

  &:hover {
  background-color: var(--clr-primary-9);
}
`;



export default LinkButton;

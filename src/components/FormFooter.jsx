import { Link } from "react-router-dom";

import styled from "styled-components";

function FormFooter({ text, route, routeText }) {
  return (
    <Paragraph>
      {text}
      <StyledLink to={route}>{routeText}</StyledLink>
    </Paragraph>
  );
}

const StyledLink = styled(Link)`
  color: #ad40af;
  margin-left: 10px;
  font-weight: 600;
`;
const Paragraph = styled.p`
  color: #091322;
  opacity: 0.7;
  margin: 10px auto;
  font-size: 18px;
  text-align: center;
`;

export default FormFooter;

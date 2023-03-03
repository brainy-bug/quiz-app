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
  font-size: 16px;
  font-weight: 400;
  color: #091322;
  opacity: 0.7;
  margin-bottom:10px;
  text-align: center;
`;

export default FormFooter;


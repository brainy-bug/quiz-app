import { Link } from "react-router-dom";
import styled from "styled-components";

function FormFooter(props) {
  const { linkText, route, text } = props;
  return (
    <Paragraph>
      {text}
      <StyledLink to={route}>{linkText}</StyledLink>
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
  margin: 0px;
`

export default FormFooter;

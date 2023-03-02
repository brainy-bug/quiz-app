import styled from "styled-components";

const Error = ({ children }) => {
  return (
    <Container>
      <ErrorText>{children}</ErrorText>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  background: #e87c03;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  margin: 0 0 28px;
`;

const ErrorText = styled.p`
  color: #fff;
  display: table-cell;
  vertical-align: middle;
  a {
    color: inherit;
    text-decoration: underline;
    font-weight: bold;
  }
`;

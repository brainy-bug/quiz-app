import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ScrollToTop from "../../components/ScrollToTop";

import LoginContainer from "../../components/Containers/LoginContainer";
import SideContainer from "../../components/Containers/SideContainer";

const Login = () => {
  return (
    <Container>
      {/* <ScrollToTop /> */}
      <SideContainer />
      <LoginContainer />
    </Container>
  );
};

const Container = styled.section`
  display: grid;

  @media screen and (min-width: 650px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

export default Login;

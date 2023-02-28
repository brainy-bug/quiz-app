import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { useAuth } from "../hooks/useAuth.js";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <NavbarContainer>
      <Heading>
        Good morning,
        <span>Abdulrasheed</span>
      </Heading>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='login'>Login</StyledLink>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const StyledLink = styled(NavLink)`
  color: #f3f3f3;
  font-size: 1.2rem;
`;

const Heading = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;

export default Navbar;

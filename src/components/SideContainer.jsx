import styled from "styled-components";

import coverImage from "../assets/bg-cover.jpeg";

const SideContainer = ({children}) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #14274457;
    z-index: -1;
  }
  position: relative;
  width: 100%;
  height: 100vh;

  background-color: #091322;
  background-image: url(${coverImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;

  img {
    height: 130px;
    width: 150px;
    /* align-self: center; */
  }

  a {
    display: block;
    color: #f3f3f3;
    font-size: 2rem;
    cursor: pointer;
    margin-bottom: 16px;

    &:hover {
      opacity: 0.7;
    }

    @media screen and (min-width: 650px) {
      display: none;
    }
  }
`;

export default SideContainer;

import styled from "styled-components";

// import icons
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";

// import avatar
import AvatarImage from "../assets/user-profile.jpg";

// import themeColor
import { darkThemeColor } from "../utils/colors";

const Sidebar = () => {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Abdulrasheed</Name>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h2>Dashboard</h2>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h2>Take a Quiz</h2>
          </Link>
          <Link>
            <FaWallet />
            <h2>Quiz Results</h2>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h2>Reports</h2>
          </Link>
        </Links>
        <LogOut>Logout</LogOut>
      </LinksContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  /* border-radius: 2rem; */
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  p {
    color: white;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  padding-top: 2rem;
  height: 70%;
`;

const Link = styled.li`
  margin-left: 10%;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h2 {
    font-weight: 400;
    font-size: 1.1rem;
    margin: 0;
  }
  svg {
    font-size: 1.1rem;
  }
`;

const LogOut = styled.button`
  background-color: #091322;
  width: 80%;
  outline: none;
  border: none;
  font-size: 1.2rem;
  color: #afabab;
  margin: 0 auto;
  border-radius: 1rem;
  padding: 0.75rem;
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #2f3031;
  }
  a {
    color: #9fe8f1;
    text-decoration: none;
  }
`;

export default Sidebar;

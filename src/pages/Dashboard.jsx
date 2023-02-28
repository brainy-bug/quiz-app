import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
// import MainContent from "../components/MainContent";

const Dashboard = () => {

    const [isLoading, setIsLoading] = useState(true);
    // const { setIsRegistered } = useAuth();

    useEffect(() => {
      // setIsRegistered(true);
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 800);

      return () => {
        clearTimeout(timeoutId);
      };
    }, []);

    if (isLoading) {
      return <Loader />;
    }

  return (
    <Container>
      <Sidebar />
      {/* <MainContent /> */}
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  /* border-radius: 2rem; */
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;


export default Dashboard;

import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Outlet />
      {/* <Navbar /> */}
    </>
  );
};
export default SharedLayout;

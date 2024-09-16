import { Outlet } from "react-router-dom";
import Navbar from "../pages/Frontend/Shared/Navbar/Navbar";
import Footer from "../pages/Frontend/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <div className=" max-w-screen-xl   mx-auto min-h-screen ">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Main;

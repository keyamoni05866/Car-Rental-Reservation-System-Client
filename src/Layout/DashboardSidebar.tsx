import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../pages/Dashboard/utils/sidebarItemsGenerator";
import { adminPaths } from "../Router/admin.routes";
import { useAppSelector } from "../Redux/hook";
import { currentUser } from "../Redux/features/auth/authSlice";
import { userPaths } from "../Router/user.route";
import { Link } from "react-router-dom";
import bookingImage from "../assets/booking.png";
import carImage from "../assets/car.png";
import contactImage from "../assets/contact.png";
import aboutImage from "../assets/about.png";
import logo from "../assets/logo.png";

const { Sider } = Layout;
const DashboardSidebar = () => {
  const userRole = {
    ADMIN: "admin",
    USER: "user",
  };

  const user = useAppSelector(currentUser);

  let sidebarItems;
  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="" className="size-8" /> <h2>CityCar Rental</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
        className="mt-5"
      />
      <div className="divider divider-primary mx-3 mt-10"></div>
      <div className="mt-10 grid grid-cols-1">
        <div className="flex   ms-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
            fill="#fff"
          >
            <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
          </svg>
          <Link to="/">
            <button className="!text-white ms-2 text-lg mb-3 text-center">
              {" "}
              Home
            </button>
          </Link>
        </div>
        <div className="flex   ms-8">
          <img src={carImage} className="size-5" />
          <Link to="/cars">
            <button className="!text-white ms-2 text-lg mb-3 text-center">
              {" "}
              Cars
            </button>
          </Link>
        </div>
        <div className="flex   ms-8">
          <img src={bookingImage} className="size-5" />
          <Link to="/booking">
            <button className="!text-white ms-2 text-lg mb-3 text-center">
              {" "}
              Booking
            </button>
          </Link>
        </div>
        <div className="flex   ms-8">
          <img src={aboutImage} className="size-5" />
          <Link to="/aboutUs">
            <button className="!text-white ms-2 text-lg mb-3 text-center">
              {" "}
              About Us
            </button>
          </Link>
        </div>
        <div className="flex   ms-8">
          <img src={contactImage} className="size-5" />
          <Link to="/contactUs">
            <button className="!text-white ms-2 text-lg mb-3 text-center">
              {" "}
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </Sider>
  );
};

export default DashboardSidebar;

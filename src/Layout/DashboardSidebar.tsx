import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../pages/Dashboard/utils/sidebarItemsGenerator";
import { adminPaths } from "../Router/admin.routes";
import { useAppSelector } from "../Redux/hook";
import { currentUser } from "../Redux/features/auth/authSlice";
import { userPaths } from "../Router/user.route";

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
    </Sider>
  );
};

export default DashboardSidebar;

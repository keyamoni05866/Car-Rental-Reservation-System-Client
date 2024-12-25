import { Button, Layout, theme } from "antd";
import DashboardSidebar from "./DashboardSidebar";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/hook";
import { currentUser, logOutUser } from "../Redux/features/auth/authSlice";
import { useState } from "react";
import { TUser } from "../Types";
import profile from "../assets/profilePicture/profile.jpg";

const { Header, Content } = Layout;

const DashboardLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(currentUser) as unknown as TUser;
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <Layout>
        <DashboardSidebar />

        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              onClick={handleLogOut}
              style={{
                float: "right",
                marginTop: "15px",
                marginRight: "50px",
                backgroundColor: colorBgContainer,
              }}
            >
              LogOut
            </Button>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;

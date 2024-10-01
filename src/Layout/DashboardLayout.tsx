import { Button, Layout, theme } from "antd";
import DashboardSidebar from "./DashboardSidebar";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch } from "../Redux/hook";
import { logOutUser } from "../Redux/features/auth/authSlice";

const { Header, Content } = Layout;

const DashboardLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <Layout>
      <DashboardSidebar />

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            onClick={handleLogOut}
            style={{
              float: "right",
              marginTop: "15px",
              marginRight: "50px",
              backgroundColor: "#1572d3",
              color: "white",
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
  );
};

export default DashboardLayout;

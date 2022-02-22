import { Layout, Menu } from "antd";
import React from "react";
import { ROUTES } from "../../../routes/routes";
import { Header } from "../../atoms/header/Header";

import { useNavigate } from "react-router-dom";

import "./Main.scss";
import { ROUTE_NAMES } from "../../../constants/routesConstants";
interface MainProps {
  children: React.ReactNode;
}

const { Content, Sider } = Layout;

const itemMenuStyle: React.CSSProperties = {
  color: "#999999",
};
export const Main = ({ children }: MainProps) => {
  const navigate = useNavigate();

  const defaultSelectedKeys =
    ROUTES.filter((route) => route.path === window.location.pathname)[0]
      ?.path || ROUTE_NAMES.HOME.path;

  return (
    <Layout className="layout">
      <Header />
      <Layout>
        <Sider className="layout-sider">
          <Menu
            mode="inline"
            className="layout-sider-menu"
            theme="dark"
            selectedKeys={[`.$${defaultSelectedKeys}`]}
          >
            {React.Children.toArray(
              ROUTES.map(
                (route) =>
                  route.isPrivate && (
                    <Menu.Item
                      style={{
                        ...itemMenuStyle,
                        cursor: !route.isAvaliable ? "not-allowed" : "pointer",
                      }}
                      className={
                        "layout-sider-menu-item" +
                        (route.isAvaliable && defaultSelectedKeys !== route.path
                          ? " layout-sider-menu-item-available"
                          : "")
                      }
                      key={route.path}
                      onClick={() => route.isAvaliable && navigate(route.path)}
                    >
                      {route.name}
                    </Menu.Item>
                  )
              )
            )}
          </Menu>
        </Sider>
        <Layout>
          <Content className="layout-content">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

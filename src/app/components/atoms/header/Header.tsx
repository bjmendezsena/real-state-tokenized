import "./Header.scss";
import { Avatar, Col, Layout, Row } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../../constants/routesConstants";
const { Header: AntHeader } = Layout;

export const Header = () => {
  const navigate = useNavigate();
  const profileName = "Austin Robertson";

  const logoName = profileName.substring(0, 1);

  return (
    <AntHeader className="header">
      <div
        className="header-logo_container"
        onClick={() => navigate(ROUTE_NAMES.HOME.path, { replace: true })}
      >
        <img
          className="header-logo_container-logo"
          src={require("../../../assets/images/logo.png")}
          alt="logo"
        />
      </div>
      <Row>
        <div className="header-icons_container">
          <SearchOutlined className="header-icons_container-icon" />
          <Badge dot className="header-icons_container-badge">
            <BellOutlined className="header-icons_container-icon" />
          </Badge>
        </div>
        <Col
          style={{
            marginLeft: 10,
          }}
        >
          <Avatar className="header-avatar" size="large" gap={4}>
            {logoName}
          </Avatar>
        </Col>

        <div className="header-profile_section">
          <div className="header-profile_section-title">{profileName}</div>
          <div className="header-profile_section-subtitle">
            Marketing Administrator
          </div>
        </div>
        <div style={{
          marginLeft: 10,
          cursor: "pointer",
        }} >
          <CaretDownOutlined />
        </div>
      </Row>
    </AntHeader>
  );
};

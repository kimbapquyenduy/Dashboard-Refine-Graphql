import { Layout, Space } from "antd";
import CurrentUser from "./current-user";

const Header = () => {
  const headerStyle: React.CSSProperties = {
    background: "#fff",
    display: "flex",
    justifyContent: "flex-end",
    padding: "24px",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };
  return (
    <Layout.Header style={headerStyle}>
      <Space align="center" size="middle">
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
};

export default Header;
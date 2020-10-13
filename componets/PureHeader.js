import { Typography, Avatar, Popover, Button } from "antd";
const { Title, Text } = Typography;

import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const Header = () => {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("blog_user")).name);
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <div className="content">
            <Title style={{ color: "#fff" }} level={3}>
              Dashboard
            </Title>
            <div className="user-Account">
              <Text style={{ color: "#fff", fontSize: 18, marginRight: 10 }}>
                {userInfo}
              </Text>
              <Popover
                content={
                  <div className="user-setting">
                    <Button type="text">Change password</Button>
                    <br />
                    <Button type="link">Sign Out</Button>
                  </div>
                }
              >
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Popover>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

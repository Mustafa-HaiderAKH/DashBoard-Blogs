import Header from "../componets/PureHeader";
import BlogCard from "../componets/pureCard";
import { Input, Button, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AuthContainer from "../componets/Authcontainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getArtilces } from "../pages/api/api";

const Home = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    getArtilces((err, result) => {
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
      } else {
        setData(result.articles);
      }
    });
  }, []);

  return (
    <>
      <AuthContainer>
        <div className="Home-content">
          <Header />
          <div className="container">
            <div className="blog-box">
              <Input placeholder="Search for Blog...." style={{ width: 400 }} />
              <Button
                onClick={() => {
                  router.push("./blog/create");
                }}
                type="primary"
                icon={<PlusOutlined />}
              >
                New Article
              </Button>
            </div>
            <Row gutter={[20, 30]}>
              {data.map((article) => (
                <Col md={8} sm={12} xs={24} key={article.id}>
                  <BlogCard article={article} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </AuthContainer>
    </>
  );
};
export default Home;

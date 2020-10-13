import { Button, Input, message } from "antd";
import { useState } from "react";
import { login } from "../pages/api/api";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handelrequest = () => {
    setIsLoading(true);
    login({ email, password }, (err, result) => {
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((el) =>
          message.error(result.errMsg[el])
        );
        setIsLoading(false);
      } else {
        localStorage.setItem("blog_token", result.token);
        localStorage.setItem("blog_user", JSON.stringify(result.user));
        router.replace("/");
        setIsLoading(false);
      }
    });
  };
  return (
    <>
      <div className="Login-page">
        <div className="Login-Form">
          <Input
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input.Password
            style={{ marginTop: 10, marginBottom: 10 }}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            loading={isLoading}
            type="primary"
            block
            onClick={handelrequest}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};
export default Login;

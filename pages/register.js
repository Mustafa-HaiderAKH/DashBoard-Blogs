const image =
  "https://everipedia-storage.s3.amazonaws.com/NewlinkFiles/17045981/a396f___the-station-iraq/coworking-space.jpe";
import { Button, Input, message, Card, Row, Col } from "antd";
import { useState } from "react";
import { Regiser } from "../pages/api/api";
import { useRouter } from "next/router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handelRegister = () => {
    setIsLoading(true);
    Regiser(
      {
        email,
        password,
        name,
        phone,
      },
      (err, result) => {
        if (err) throw err;
        if (!result.status) {
          Object.keys(result.errMsg).forEach((el) =>
            message.error(result.errMsg[el])
          );
          setIsLoading(false);
        } else {
          router.replace("/login");
          setIsLoading(false);
        }
      }
    );
  };
  return (
    <>
      <div className="register-page">
        <img src={image} />
        <div className="register-form">
          <Input
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input.Password
            className="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button
            type="primary"
            block
            onClick={handelRegister}
            loading={isLoading}
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
};
export default Register;

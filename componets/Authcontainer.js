import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AuthContainer = (props) => {
  const router = useRouter();

  const [userLogin, setUserLogin] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem("blog_token")) {
      router.replace("/login");
      setUserLogin(false);
    }
  }, [router]);

  return userLogin && props.children;
};
export default AuthContainer;

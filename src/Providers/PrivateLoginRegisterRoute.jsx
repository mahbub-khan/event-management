import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivateLoginRegisterRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return children;
  }
  return navigate("/");
};

export default PrivateLoginRegisterRoute;

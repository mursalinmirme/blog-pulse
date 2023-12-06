import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div></div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/signin"}></Navigate>;
};

export default PrivateRouter;

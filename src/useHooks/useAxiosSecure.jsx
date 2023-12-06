import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_RUNNING_SERVER,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { userLogout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          axiosSecure.post("/logout").then(() => {
            userLogout();
            toast.error("You are logged out!");
            navigate("/signin");
          });
        }
      }
    );
  }, [navigate, userLogout]);

  return axiosSecure;
};

export default useAxiosSecure;

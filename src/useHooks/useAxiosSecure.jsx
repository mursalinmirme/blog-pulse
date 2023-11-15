import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { userLogout, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("you should log out the user");
          const lastUser = { logoutUser: user?.email };
          axios
            .post("http://localhost:5000/logout", lastUser, {
              withCredentials: true,
            })
            .then(() => {
              userLogout();
              toast.error("You are logged out!");
            });
          navigate("/signin");
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;

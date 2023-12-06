import { Button } from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../useHooks/useAxiosPublic";
const Signin = () => {
  const [passwordType, setPasswordType] = useState(false);
  const { signinwithEmailandPasswrd, googleSignin } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const updateInfo = {displayName: name, photoURL: image }
    // const newUser = {name, image, email, password};
    const toastId = toast.loading("Signing...");
    signinwithEmailandPasswrd(email, password)
      .then((res) => {
        // console.log(res);
        toast.success("Login Successfully", { id: toastId });
        const currentPerson = { email: res.user?.email };
        axiosPublic
          .post("/jwt", currentPerson, {
            withCredentials: true,
          })
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => {
        if (
          err.message === "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          return toast.error(`email and passowrd doesn't match!`, {
            id: toastId,
          });
        }
        toast.error(err.message, { id: toastId });
      });
  };
  // handle google sign up
  const handleGoogleSignup = () => {
    googleSignin()
      .then((response) => {
        toast.success("You are successfully logged in.");
        const currentPerson = { email: response.user?.email };
        axiosPublic
          .post("/jwt", currentPerson, {
            withCredentials: true,
          })
          .then((res) => {
            navigate("/");
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <motion.div
      className="mt-20 max-w-screen-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-11/12 md:w-[550px] px-10 py-10 mx-auto border shadow rounded-xl">
        <p className="text-center text-[#3A5A40]">Welcome Back</p>
        <h3 className="text-center mt-3 text-xl font-semibold">{`Let's Sign in your account`}</h3>
        <form onSubmit={handleSignIn} className="mt-7" action="">
          <div className="flex flex-col mt-7">
            <label className="mb-1" htmlFor="">
              Email
            </label>
            <input
              className="border px-3 py-3 outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col mt-7 relative">
            <label className="mb-1" htmlFor="">
              Password
            </label>
            <input
              className="border px-3 py-3 outline-none"
              type={passwordType ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            {passwordType ? (
              <AiFillEyeInvisible
                onClick={() => setPasswordType(!passwordType)}
                className="absolute bottom-3.5 text-gray-500 right-4 text-xl"
              ></AiFillEyeInvisible>
            ) : (
              <AiFillEye
                onClick={() => setPasswordType(!passwordType)}
                className="absolute bottom-3.5 text-gray-500 right-4 text-xl"
              ></AiFillEye>
            )}
          </div>
          <Button
            type="submit"
            style={{
              background: "#588157",
              color: "white",
              fontWeight: "600",
              marginTop: "30px",
            }}
            variant="solid"
            className="w-full h-12 text-base font-medium font-fontNoto"
          >
            Sign In
          </Button>
        </form>
        <p className="text-center mt-5">
          {`Already have an account`}
          <Link to={"/signup"} className="underline ml-1">
            Register now
          </Link>
        </p>
        <div className="flex gap-3 items-center justify-center mt-4">
          <span className="w-36 border-b-2"></span>
          <span>Or</span>
          <span className="w-36 border-b-2"></span>
        </div>
        <div>
          <button
            onClick={handleGoogleSignup}
            className="p-3 w-full flex items-center gap-2 justify-center rounded-full mt-4 border-2 border-[#3a5a40cd] hover:bg-[#3a5a403f]"
          >
            <FcGoogle className="text-2xl"></FcGoogle>
            <span className="font-semibold">Sign Up With Google</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Signin;

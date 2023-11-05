import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
const Signin = () => {
    const [ passwordType, setPasswordType ] = useState(false);
    return (
        <div className="mt-20 max-w-screen-2xl mx-auto">
            <div className="w-[550px] px-10 py-10 mx-auto border shadow rounded-xl">
                <p className="text-center text-[#3A5A40]">Welcome Back</p>
                <h3 className="text-center mt-3 text-xl font-semibold">{`Let's Sign in your account`}</h3>
                <form className="mt-7" action="">
                    <div className="flex flex-col mt-7">
                        <label className="mb-1" htmlFor="">Email</label>
                        <input className="border px-3 py-3 outline-none" type="text" name="" id="" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col mt-7 relative">
                        <label className="mb-1" htmlFor="">Password</label>
                        <input className="border px-3 py-3 outline-none" type={passwordType ? 'password' : 'text'} name="" id="" placeholder="Enter your password" />
                        {
                            passwordType ? <AiFillEye onClick={() => setPasswordType(!passwordType)} className="absolute bottom-3.5 text-gray-500 right-4 text-xl"></AiFillEye> :
                            <AiFillEyeInvisible onClick={() => setPasswordType(!passwordType)} className="absolute bottom-3.5 text-gray-500 right-4 text-xl"></AiFillEyeInvisible>
                        }
                    </div>
                    <Button style={{background: '#588157', color: 'white', fontWeight: '600', marginTop: '30px'}} variant="solid" className="w-full h-12 text-base font-medium font-fontNoto">Sign In</Button>
                </form>
                <p className="text-center mt-5">{`Already have an account`}<Link to={'/signup'} className="underline ml-1">Register now</Link></p>
                <div className="flex gap-3 items-center justify-center mt-4">
                    <span className="w-36 border-b-2"></span>
                    <span>Or</span>
                    <span className="w-36 border-b-2"></span>
                </div>
                <div>
                    <button className="p-3 w-full flex items-center gap-2 justify-center rounded-full mt-4 border-2 border-[#3a5a40cd] hover:bg-[#3a5a403f]">
                        <FcGoogle className="text-2xl"></FcGoogle>
                        <span className="font-semibold">Sign Up With Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signin;
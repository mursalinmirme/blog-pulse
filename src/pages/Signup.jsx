import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
const Signup = () => {
    const [ passwordType, setPasswordType ] = useState(false);
    const { signupByemailAndpassowrd, updateNameAndProfile, googleSignin } = useAuth();
    const navigate = useNavigate();
    // handle create an account
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        // const updateInfo = {displayName: name, photoURL: image }
        // const newUser = {name, image, email, password};
        const toastId = toast.loading('Creating...')
        if(!/^(.{6,})$/.test(password)){
            return toast.error('Password must be at least 6 characters', {id : toastId});
        }
        else if(!/.*[A-Z].*/.test(password)){
            return toast.error('Password must be at least a capital letter', {id : toastId});
        }
        else if(!/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-].*/.test(password)){
            return toast.error('Password must be at least a special character', {id : toastId});
        }
        else if(!/.*\d.*/.test(password)){
            return toast.error('Password must be at least a numeric character', {id : toastId});
        }
        signupByemailAndpassowrd(email, password)
        .then(() => {
            // console.log(res);
            updateNameAndProfile({displayName: name, photoURL: image })
            .then(() => {
                toast.success('Registration successfully', {id : toastId});
                form.reset();
                const currentPerson = { email: email };
                axios.post('http://localhost:5000/jwt', currentPerson , {withCredentials: true})
                .then(() => {
                    navigate('/');
                })
                .catch(err => console.log(err.message))
            })
            .catch(error => {
                toast.error(error.message, {id : toastId});

            })
        })
        .catch(err => {
            toast.error(err.message, {id : toastId});
        })
    }
    // handle google sign up 
    const handleGoogleSignup = () => {
        googleSignin()
        .then((response) => {
            toast.success('Registration successfully');
            console.log('###',response.user?.email);
            const currentPerson = { email: response.user?.email };
                axios.post('http://localhost:5000/jwt', currentPerson , {withCredentials: true})
                .then(() => {
                    navigate('/');
                })
                .catch(err => console.log(err.message))
        })
        .catch(err => {
            toast.error(err.message);
        })
    }
    return (
        <div className="mt-20 max-w-screen-2xl mx-auto">
            <div className="w-11/12 md:w-[550px] px-10 py-10 mx-auto border shadow rounded-xl">
                <p className="text-center text-[#3A5A40]">Welcome</p>
                <h3 className="text-center mt-3 text-xl font-semibold font-fontNoto">{`Let's create an account`}</h3>
                <form onSubmit={handleSignUp} className="mt-7" action="">
                    <div className="flex flex-col">
                        <label className="mb-1" htmlFor="">Full Name</label>
                        <input className="border px-3 py-2.5 outline-none" type="text" name="name" id="" placeholder="Enter your name" required />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label className="mb-1" htmlFor="">Image URL</label>
                        <input className="border px-3 py-2.5 outline-none" type="text" name="image" id="" placeholder="Enter your image URL" required />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label className="mb-1" htmlFor="">Email</label>
                        <input className="border px-3 py-2.5 outline-none" type="email" name="email" id="" placeholder="Enter your email" required />
                    </div>
                    <div className="flex flex-col mt-5 relative">
                        <label className="mb-1" htmlFor="">Password</label>
                        <input className="border px-3 py-2.5 outline-none" type={passwordType ? 'text' : 'password'} name="password" id="" placeholder="Enter your password" required />
                        {
                            passwordType ? <AiFillEyeInvisible onClick={() => setPasswordType(!passwordType)} className="absolute bottom-3 text-gray-500 right-4 text-xl"></AiFillEyeInvisible> : <AiFillEye onClick={() => setPasswordType(!passwordType)} className="absolute bottom-3 text-gray-500 right-4 text-xl"></AiFillEye>
                        }
                    </div>
                    <Button type="submit" style={{background: '#588157', color: 'white', fontWeight: '600', marginTop: '30px'}} variant="solid" className="w-full h-12 text-base font-medium font-fontNoto">Sign UP</Button>
                </form>
                <p className="text-center mt-5">{`Don't have an account?`}<Link to={'/signin'} className="underline ml-1">Login now</Link></p>
                <div className="flex gap-3 items-center justify-center mt-4">
                    <span className="w-36 border-b-2"></span>
                    <span>Or</span>
                    <span className="w-36 border-b-2"></span>
                </div>
                <div>
                    <button onClick={handleGoogleSignup} className="p-3 w-full flex items-center gap-2 justify-center rounded-full mt-4 border-2 border-[#3a5a40cd] hover:bg-[#3a5a403f]">
                        <FcGoogle className="text-2xl"></FcGoogle>
                        <span className="font-semibold">Sign Up With Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
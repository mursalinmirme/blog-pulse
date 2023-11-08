import { Button } from "@mui/material";
import { MdOutlineArrowBack } from 'react-icons/md'
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h3 className="text-8xl lg:text-9xl font-bold text-[#3A5A40]">404</h3>
                <h4 className="text-3xl lg:text-4xl mt-6 font-semibold text-[#588157]">Opps.... Page not found</h4>
                <Link to={'/'}>
                  <Button style={{marginTop: '45px', background: '#588157', color: '#ffffff'}} variant="sollid" className="flex gap-1 h-11"><MdOutlineArrowBack className="text-2xl"></MdOutlineArrowBack><span>Back to Home</span></Button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
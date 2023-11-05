import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="font-fontPoopins max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div><Toaster/></div>
        </div>
    );
};

export default MainLayout;
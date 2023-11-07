import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRouter = ({children}) => {
    const { user, loading } = useAuth();
    if(loading){
        return <div className="flex justify-center items-center h-96"><h3 className="text-3xl">Loading...</h3></div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/signin'}></Navigate>
};

export default PrivateRouter;
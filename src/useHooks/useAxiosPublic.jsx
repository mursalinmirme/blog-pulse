import axios from "axios";

const axosPublic = axios.create({
    baseURL: import.meta.env.VITE_RUNNING_SERVER
})
const useAxiosPublic = () => {

    return axosPublic
};

export default useAxiosPublic;
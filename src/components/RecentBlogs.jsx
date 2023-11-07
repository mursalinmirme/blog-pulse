import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import SingleFeaturedBlog from "./SingleFeaturedBlog";

const RecentBlogs = () => {
    const date = new Date();
    const blogPostTime = date.toISOString();
    const {data, isLoading} = useQuery({
        queryKey: ['recentBlogs'],
        queryFn: () => {
            return axios.get(`http://localhost:5000/recentBlogs?time=${blogPostTime}`)
            .then(res => {
                // console.log(res.data);
                return res.data;
            })
            .catch(err => {
                console.log(err);
            })
        }
    })
    if(isLoading){
        return <div className="flex justify-center items-center h-96"><h3 className="text-3xl">Loading...</h3></div>
    }

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="mt-14 w-10/12 mx-auto">
            <h3 className="text-center font-bold text-3xl font-fontNoto text-[#344E41]">Recent Blog Features</h3>
            <p className="w-1/3 text-center mx-auto text-sm mt-4 leading-relaxed text-[#588157]">Explore our most recent blog posts to stay in the loop with the latest trends, insights, and stories.</p>
            <div className="grid grid-cols-3 gap-6 mt-10">
                {
                    data?.map(blog => <SingleFeaturedBlog key={blog._id} blog={blog}></SingleFeaturedBlog>)
                }
            </div>
        </div>
        </div>
    );
};

export default RecentBlogs;
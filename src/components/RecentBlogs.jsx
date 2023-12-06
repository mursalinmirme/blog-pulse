import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import BlogSkeleton from "./BlogSkeleton";
import SingleFeaturedBlog from "./SingleFeaturedBlog";
import useAxiosPublic from "../useHooks/useAxiosPublic";
const RecentBlogs = () => {
  const date = new Date();
  const blogPostTime = date.toISOString();
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["recentBlogs"],
    queryFn: () => {
      return axiosPublic
        .get(`/recentBlogs?time=${blogPostTime}`)
        .then((res) => {
          // console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  if (isLoading) {
    return <BlogSkeleton></BlogSkeleton>;
  }

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="mt-14 w-11/12 md:w-10/12 mx-auto">
        <h3 className="text-center font-bold text-2xl lg:text-3xl font-fontNoto text-[#344E41]">
          Recent Blog Features
        </h3>
        <p className="md:w-2/3 px-8 md:px-0 text-center mx-auto text-sm mt-4 leading-relaxed text-[#588157]">
          Explore our most recent blog posts to stay in the loop with the latest
          trends, insights, and stories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {data?.map((blog) => (
            <SingleFeaturedBlog key={blog._id} blog={blog}></SingleFeaturedBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;

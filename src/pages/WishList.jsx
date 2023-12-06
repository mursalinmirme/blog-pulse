import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";
import WishlistSkeleton from "../components/WishlistSkeleton";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../useHooks/useAxiosSecure";

const WishList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getWishList"],
    queryFn: async () => {
      const getMyWishList = await axiosSecure.get(
        `/wishlist?email=${user?.email}`
      );
      return getMyWishList.data;
    },
  });

  const handleRemoveWishList = (deleteId) => {
    const toastId = toast.loading("Deleting...");
    axiosSecure
      .delete(`/wishlist/${deleteId}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          refetch();
          toast.success("Wishlist Delete successfully", { id: toastId });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  if (isLoading) {
    return <WishlistSkeleton></WishlistSkeleton>;
  }

  return (
    <div className="mt-20 w-10/12 mx-auto">
      <h2 className="text-center text-2xl font-semibold">My Saved Wishlist</h2>
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {data?.map((list) => {
            return (
              <motion.div
                key={list._id}
                className="border p-5 rounded-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img className="rounded-md" src={list.blogImage} alt="" />
                <div className="mt-4">
                  <h3 className="text-xl font-medium">{list.blogTitle}</h3>
                  <div className="mt-3.5">
                    <p className="text-base inline px-3 py-1 font-medium bg-[#DAD7CD] text-[#000000] rounded-sm">
                      {list.category}
                    </p>
                  </div>
                  <p className="text-sm mt-4">
                    {list.shortDescription > 150
                      ? list.shortDescription.slice(0, 150) + "..."
                      : list.shortDescription}
                  </p>
                  <div className="mt-5 flex justify-between">
                    <Link to={`/blogs/${list?.blogId}`}>
                      <Button
                        variant="solid"
                        style={{ background: "#588157", color: "white" }}
                        className="bg-[#3A5A40] px-5 py-2 text-white rounded-md"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button
                      onClick={() => handleRemoveWishList(list?._id)}
                      style={{ border: "1px solid #3A5A40" }}
                      variant="outline"
                      className="bg-[#588157] flex gap-2 items-center px-5 font-medium py-2 text-white rounded-md"
                    >
                      <FiBookmark></FiBookmark>
                      <span className="text-[#3A5A40] font-medium">Remove</span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="w-full h-60 flex justify-center items-center">
          <h3 className="text-center text-xl font-semibold">
            You dont have any stored wishlist
          </h3>
        </div>
      )}
    </div>
  );
};

export default WishList;

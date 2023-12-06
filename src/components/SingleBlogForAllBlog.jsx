import { Button } from "@mui/material";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../useHooks/useAxiosPublic";

const SingleBlogForAllBlog = ({ singleBlog }) => {
  const { _id, blogTitle, blogImage, category, shortDescription } = singleBlog;
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleWishlist = () => {
    const newWishList = {
      blogId: _id,
      blogTitle,
      blogImage,
      category,
      shortDescription,
      owner: user?.email,
    };
    const toastId = toast.loading("wishlisting...");
    axiosPublic
      .post(`/wishlist`, newWishList)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Wishlist added successfully", { id: toastId });
        }
      })
      .catch((err) => {
        toast.error(err.message, { id: toastId });
      });
  };

  return (
    <motion.div
      className="border p-5 rounded-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img className="rounded-md" src={blogImage} alt="" />
      <div className="mt-4">
        <h3 className="text-xl font-medium">{blogTitle}</h3>
        <div className="mt-3.5">
          <p className="text-base inline px-3 py-1 font-medium bg-[#DAD7CD] text-[#000000] rounded-sm">
            {category}
          </p>
        </div>
        <p className="text-sm mt-4">
          {shortDescription?.length > 150
            ? shortDescription?.slice(0, 150) + "..."
            : shortDescription}
        </p>
        <div className="mt-5 flex justify-between">
          <Link to={`/blogs/${_id}`}>
            <Button
              variant="solid"
              style={{ background: "#588157", color: "white" }}
              className="bg-[#3A5A40] px-5 py-2 text-white rounded-md"
            >
              Read More
            </Button>
          </Link>
          {user ? (
            <Button
              onClick={handleWishlist}
              style={{ border: "1px solid #3A5A40" }}
              variant="outline"
              className="bg-[#588157] flex gap-2 items-center px-5 font-medium py-2 text-white rounded-md"
            >
              <FiBookmark></FiBookmark>
              <span className="text-[#3A5A40] font-medium">Wishlist</span>
            </Button>
          ) : (
            <Link to={"/signin"}>
              <Button
                style={{ border: "1px solid #3A5A40" }}
                variant="outline"
                className="bg-[#588157] flex gap-2 items-center px-5 font-medium py-2 text-white rounded-md"
              >
                <FiBookmark></FiBookmark>
                <span className="text-[#3A5A40] font-medium">Wishlist</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SingleBlogForAllBlog;

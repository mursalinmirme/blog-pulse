import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../useHooks/useAxiosPublic";

const AddBlog = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const category = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const cateFatch = await axiosPublic.get("/categories");
      const categori = await cateFatch.data;
      return categori;
    },
  });
  const handleAddBlog = (e) => {
    e.preventDefault();
    const date = new Date();
    const form = e.target;
    const blogTitle = form.blogTitle.value;
    const blogImage = form.blogImage.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const bloggerId = user?.uid;
    const bloggerName = user?.displayName;
    const bloggerEmail = user?.email;
    const bloggerImage = user?.photoURL;
    const blogPostTime = date.toISOString();
    const newBlog = {
      blogTitle,
      blogImage,
      category,
      shortDescription,
      longDescription,
      bloggerId,
      bloggerName,
      bloggerEmail,
      blogPostTime,
      bloggerImage,
    };
    console.log(newBlog);
    const toastId = toast.loading("Posting...");
    axiosPublic
      .post("/addnewblog", newBlog)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Blog post successfully", { id: toastId });
          form.reset();
        }
      })
      .catch((err) => {
        toast.success(err.message, { id: toastId });
      });
  };
  return (
    <motion.div
      className="mt-20 max-w-screen-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-10/12 lg:w-1/2 px-10 py-8 mx-auto border shadow rounded-xl">
        <h3 className="text-center mt-3 text-[#3A5A40] text-2xl font-semibold font-fontNoto">{`Make a New Blog`}</h3>
        <form onSubmit={handleAddBlog} className="mt-10" action="">
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="">
              Blog title
            </label>
            <input
              className="border px-3 py-2.5 outline-none"
              type="text"
              name="blogTitle"
              id=""
              placeholder="Enter your blog title"
              required
            />
          </div>
          <div className="flex flex-col mt-7">
            <label className="mb-1" htmlFor="">
              Blog image URL
            </label>
            <input
              className="border px-3 py-2.5 outline-none"
              type="text"
              name="blogImage"
              id=""
              placeholder="Enter your blog image URL"
              required
            />
          </div>
          <div className="flex flex-col mt-7">
            <label className="mb-1" htmlFor="">
              Category
            </label>
            <select
              className="border px-3 py-2.5 outline-none"
              name="category"
              id=""
              required
            >
              <option value="">Select category</option>
              {category.data?.map((cate) => (
                <option key={cate._id} value={cate.name}>
                  {cate.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mt-7">
            <label className="mb-1" htmlFor="">
              Short Description
            </label>
            <input
              className="border px-3 py-2.5 outline-none"
              type="text"
              name="shortDescription"
              id=""
              placeholder="Enter your blog image URL"
              required
            />
          </div>
          <div className="flex flex-col mt-7">
            <label className="mb-1" htmlFor="">
              Long Description
            </label>
            <textarea
              name="longDescription"
              className="border resize-none p-4 h-36 outline-none"
              required
            ></textarea>
          </div>

          <Button
            type="submit"
            style={{
              background: "#588157",
              color: "white",
              fontWeight: "600",
              marginTop: "30px",
            }}
            variant="solid"
            className="w-full h-12 text-base font-medium font-fontNoto"
          >
            Post Blog
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default AddBlog;

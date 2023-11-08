import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../useHooks/useAxiosSecure";

const UpdateBlog = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const categoryItem = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const cateFatch = await axios.get(
        "https://blog-pulse-server.vercel.app/categories"
      );
      const categori = await cateFatch.data;
      return categori;
    },
  });
  // console.log('use params from update page',id);
  const { data, isLoading } = useQuery({
    queryKey: ["updateBlog"],
    queryFn: async () => {
      const getUpdateBlog = await axiosSecure.get(`/update-blog?blogid=${id}`);
      return getUpdateBlog.data;
    },
  });
  console.log("update blog is", data);
  if (isLoading) {
    return (
      <div className="flex w-full justify-center items-center h-96">
        <h3>Data is Loading....</h3>
      </div>
    );
  }
  const {
    blogTitle,
    blogImage,
    category,
    shortDescription,
    longDescription,
    bloggerId,
    bloggerName,
    bloggerEmail,
    blogPostTime,
  } = data;
  const handleUpdateBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const updateBlogTitle = form.blogTitle.value;
    const updateBlogImage = form.blogImage.value;
    const updateCategory = form.category.value;
    const updateShortDescription = form.shortDescription.value;
    const updateLongDescription = form.longDescription.value;

    const updateBlog = {
      blogTitle: updateBlogTitle,
      blogImage: updateBlogImage,
      category: updateCategory,
      shortDescription: updateShortDescription,
      longDescription: updateLongDescription,
      bloggerId,
      bloggerName,
      bloggerEmail,
      blogPostTime,
    };
    const toastId = toast.loading("Updating...");
    axios
      .put(`https://blog-pulse-server.vercel.app/update-blog/${id}`, updateBlog)
      .then((res) => {
        console.log("Update status is", res.data);
        if (res.data.acknowledged) {
          toast.success("Updated Successfully", { id: toastId });
        }
      })
      .catch((err) => {
        console.log("Update status is", err.message);
      });
  };

  return (
    <div className="mt-20 max-w-screen-2xl mx-auto">
      <div className="w-1/2 px-10 py-8 mx-auto border shadow rounded-xl">
        <h3 className="text-center mt-3 text-[#3A5A40] text-2xl font-semibold font-fontNoto">{`Update Your Blog`}</h3>
        <form onSubmit={handleUpdateBlog} className="mt-10" action="">
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
              defaultValue={blogTitle}
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
              defaultValue={blogImage}
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
              defaultValue={category && category}
              required
            >
              <option value="">Select category</option>
              {categoryItem.data?.map((cate) => (
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
              defaultValue={shortDescription}
              required
            />
          </div>
          <div className="flex flex-col mt-7">
            <label className="mb-1" htmlFor="">
              Long Description
            </label>
            <textarea
              name="longDescription"
              className="border resize-none p-3 h-36 outline-none"
              defaultValue={longDescription}
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
    </div>
  );
};

export default UpdateBlog;

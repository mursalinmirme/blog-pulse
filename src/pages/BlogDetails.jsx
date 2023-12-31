import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useParams } from "react-router-dom";
import coverImage from "../assets/bannerBg.jpg";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../useHooks/useAxiosSecure";
import BlogDetailsSkeleton from "./BlogDetailsSkeleton";
import useAxiosPublic from "../useHooks/useAxiosPublic";
const BlogDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { data: currentItem = [], isLoading: currentBlogLoading } = useQuery({
    queryKey: ["currentBlogs"],
    queryFn: async () => {
      const getItem = await axiosSecure.get(`/allblogs/${id}`);
      return getItem.data;
    },
  });
  const {
    data: getPostComment = [],
    isLoading: getPostCommentLoading,
    refetch,
  } = useQuery({
    queryKey: ["blogComments"],
    queryFn: async () => {
      const getComments = await axiosSecure.get(
        `/comments?blog=${id}`
      );
      return getComments.data;
    },
  });

  if (currentBlogLoading) {
    return <BlogDetailsSkeleton></BlogDetailsSkeleton>;
  }
  // if (getPostCommentLoading) {
  //   return <h3>Loading...</h3>;
  // }
  const {
    _id,
    blogTitle,
    blogImage,
    category,
    shortDescription,
    longDescription,
    bloggerId,
    bloggerName,
    bloggerEmail,
    bloggerImage,
    blogPostTime,
  } = currentItem;

  const handlePostComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const newComment = {
      blogId: _id,
      bloggerId,
      comment,
      commenterName: user?.displayName,
      commenterImage: user?.photoURL,
      commenterEmail: user?.email,
    };
    const toastId = toast.loading("Posting...");
    axiosSecure
      .post("/comments", newComment)
      .then((res) => {
        if (res.data.acknowledged) {
          refetch();
          toast.success("Comment posted successfully!", { id: toastId });
        }
      })
      .catch((err) => {
        toast.success(err.message, { id: toastId });
      });
  };
  return (
    <div className="mt-20 w-11/12 lg:w-10/12 mx-auto">
      <div className="grid grid-cols-4 gap-10">
        {/* blog description */}
        <div className="col-span-4 lg:col-span-3">
          <PhotoProvider>
            <PhotoView src={blogImage}>
              <img className="h-[500px] w-full" src={blogImage} alt="" />
            </PhotoView>
          </PhotoProvider>
          <h3 className="mt-7 text-3xl font-semibold">{blogTitle}</h3>
          <div className="font-medium mt-7">
            <span className="px-7 inline py-3 bg-[#A3B18A]">{category}</span>
          </div>
          <div className="mt-8">
            <h3 className="mt-3 text-lg  font-semibold">Summary:</h3>
            <p className="">{shortDescription}</p>
          </div>
          <div className="mt-5">
            <h3 className="mt-3 text-lg font-semibold">Description:</h3>
            <p className="">{longDescription}</p>
          </div>
          {user?.email === bloggerEmail && (
            <div>
              <Link to={`/update-blog/${_id}`}>
                <Button
                  style={{
                    background: "#588157",
                    color: "#FFFFFF",
                    marginTop: "25px",
                    padding: "10px 25px",
                    fontWeight: "500",
                  }}
                  variant="solid"
                >
                  Update
                </Button>
              </Link>
            </div>
          )}
        </div>
        {/* externl details or add */}
        <div className="hidden lg:block lg:col-span-1 bg-gray-100">
          <div className="">
            <img className="w-full bg-red-500 h-40" src={coverImage} alt="" />
            <div className="flex justify-center">
              <img
                className="w-40 h-40 rounded-full object-cover -mt-24 border-4 border-[#A3B18A] border-dashed"
                src={bloggerImage}
                alt=""
              />
            </div>
          </div>
          <h3 className="text-center mt-3 font-semibold text-2xl">
            {bloggerName}
          </h3>
          <div className="px-3 mt-3">
            <p className="text-center font-medium text-gray-600">
              Total Blog: 5
            </p>
            <p className="text-center font-medium text-gray-600">Interester</p>
          </div>
        </div>
      </div>
      {/* comments section */}
      <div className="grid grid-cols-4">
        <div className="col-span-4 lg:col-span-3">
          <div className="mt-16 flex items-center gap-5">
            <span className="border-b-2 flex-1"></span>
            <span className="text-lg text-[#3A5A40] font-medium font-fontNoto">
              Readers Comments
            </span>
            <span className="border-b-2 flex-1"></span>
          </div>
          <div className="mt-10">
            <div className="space-y-10">
              {/* single comment */}
              {getPostComment.map((comnt) => {
                return (
                  <div key={comnt._id} className="flex gap-3">
                    <div>
                      <img
                        className="w-12 h-12 rounded-full"
                        src={comnt?.commenterImage}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 ">
                      <h4 className="font-medium text-base">
                        {comnt?.commenterName}
                      </h4>
                      <p className="font-normal mt-1 w-2/3 shadow p-4 border-b pb-5">
                        {comnt?.comment}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-16">
              {bloggerEmail === user.email ? (
                <div className="text-center shadow border py-20">
                  <p className="text-xl font-semibold text-[#3A5A40]">{`Sorry, but it seems you can't leave comments on your own blog post`}</p>
                </div>
              ) : (
                <form onSubmit={handlePostComment}>
                  <textarea
                    className="border rounded-xl w-full h-60 resize-none shadow outline-none p-5"
                    name="comment"
                    id=""
                    placeholder="Type your comments..."
                  ></textarea>
                  <Button
                    style={{
                      background: "#3A5A40",
                      color: "#ffffff",
                      width: "100%",
                      marginTop: "30px",
                      padding: "14px 0",
                      fontWeight: "600",
                    }}
                    type="submit"
                  >
                    Post Comment
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:visible lg:col-span-1"></div>
      </div>
    </div>
  );
};

export default BlogDetails;

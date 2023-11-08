import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const BlogDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const { data: currentItem, isLoading: currentBlogLoading } = useQuery({
    queryKey: ["currentBlogs"],
    queryFn: async () => {
      const getItem = await axios.get(
        `https://blog-pulse-server.vercel.app/allblogs/${id}`,
        { withCredentials: true }
      );
      return getItem.data;
    },
  });
  const { data: getPostComment, isLoading: getPostCommentLoading } = useQuery({
    queryKey: ["blogComments"],
    queryFn: async () => {
      const getComments = await axios.get(
        `https://blog-pulse-server.vercel.app/comments?blog=${id}`
      );
      return getComments.data;
    },
  });
  console.log("comments under this post", getPostComment);
  if (currentBlogLoading) {
    return <h3>Loading...</h3>;
  }
  if (getPostCommentLoading) {
    return <h3>Loading...</h3>;
  }
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
    blogPostTime,
  } = currentItem;

  const handlePostComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const newComment = {
      blogId: _id,
      bloggerId,
      comment,
      commenterName: bloggerName,
      commenterImage: user?.photoURL,
      commenterEmail: user?.email,
    };
    const toastId = toast.loading("Posting...");
    axios
      .post("https://blog-pulse-server.vercel.app/comments", newComment)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("Comment posted successfully!", { id: toastId });
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.success(err.message, { id: toastId });
      });
  };
  return (
    <div className="mt-20 w-10/12 mx-auto">
      <div className="grid grid-cols-4 gap-10">
        {/* blog description */}
        <div className="col-span-3">
          <img className="h-[500px] w-full" src={blogImage} alt="" />
          <h3 className="mt-7 text-3xl font-semibold">{blogTitle}</h3>
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
        <div className="col-span-1 bg-gray-100"></div>
      </div>
      {/* comments section */}
      <div className="grid grid-cols-4">
        <div className="col-span-3">
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
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default BlogDetails;

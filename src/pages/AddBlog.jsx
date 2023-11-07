import { Button } from "@mui/material";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
const AddBlog = () => {
    const { user } = useAuth();
    console.log(user?.uid);
    const category = useQuery({
        queryKey: ['categories'],
        queryFn: async() => {
            const cateFatch = await axios.get('http://localhost:5000/categories');
            const categori = await cateFatch.data;
            return categori;
        }
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
        const newBlog = {blogTitle, blogImage, category, shortDescription, longDescription, bloggerId, bloggerName, bloggerEmail, blogPostTime};
        console.log(newBlog);
        const toastId = toast.loading('Posting...')
        axios.post('http://localhost:5000/addnewblog', newBlog)
        .then(res => {
            console.log(res.data);
            if(res.data.acknowledged){
                toast.success("Blog post successfully", { id : toastId });
                form.reset();
            }
        })
        .catch(err => {
            console.log(err);
            toast.success(err.message, { id : toastId });
        })
    }
    return (
        <div className="mt-20 max-w-screen-2xl mx-auto">
            <div className="w-1/2 px-10 py-8 mx-auto border shadow rounded-xl">
                <h3 className="text-center mt-3 text-[#3A5A40] text-2xl font-semibold font-fontNoto">{`Make a New Blog`}</h3>
                <form onSubmit={handleAddBlog} className="mt-10" action="">
                    <div className="flex flex-col">
                        <label className="mb-1" htmlFor="">Blog title</label>
                        <input className="border px-3 py-2.5 outline-none" type="text" name="blogTitle" id="" placeholder="Enter your blog title" required />
                    </div>
                    <div className="flex flex-col mt-7">
                        <label className="mb-1" htmlFor="">Blog image URL</label>
                        <input className="border px-3 py-2.5 outline-none" type="text" name="blogImage" id="" placeholder="Enter your blog image URL" required />
                    </div>
                    <div className="flex flex-col mt-7">
                        <label className="mb-1" htmlFor="">Category</label>
                        <select className="border px-3 py-2.5 outline-none" name="category" id="" required>
                            <option value="">Select category</option>       
                            {
                                category.data?.map(cate => <option key={cate._id} value={cate.name}>{cate.name}</option>)
                            }     
                        </select>
                    </div>
                    <div className="flex flex-col mt-7">
                        <label className="mb-1" htmlFor="">Short Description</label>
                        <input className="border px-3 py-2.5 outline-none" type="text" name="shortDescription" id="" placeholder="Enter your blog image URL" required />
                    </div>
                    <div className="flex flex-col mt-7">
                        <label className="mb-1" htmlFor="">Long Description</label>
                        <textarea name="longDescription" className="border resize-none p-4 h-36 outline-none" required></textarea>
                    </div>

                    <Button type="submit" style={{background: '#588157', color: 'white', fontWeight: '600', marginTop: '30px'}} variant="solid" className="w-full h-12 text-base font-medium font-fontNoto">Post Blog</Button>
                </form>

            </div>
        </div>
    );
};

export default AddBlog;
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
const AddBlog = () => {
    return (
        <div className="mt-20 max-w-screen-2xl mx-auto">
            <div className="w-1/2 px-10 py-8 mx-auto border shadow rounded-xl">
                <h3 className="text-center mt-3 text-[#3A5A40] text-2xl font-semibold font-fontNoto">{`Make a New Blog`}</h3>
                <form className="mt-10" action="">
                    <div className="flex flex-col">
                        <label className="mb-1" htmlFor="">Blog title</label>
                        <input className="border px-3 py-2.5 outline-none" type="text" name="" id="" placeholder="Enter your blog title" />
                    </div>
                    <div className="flex flex-col mt-7">
                        <label className="mb-1" htmlFor="">Blog image URL</label>
                        <input className="border px-3 py-2.5 outline-none" type="text" name="" id="" placeholder="Enter your blog image URL" />
                    </div>
                    <div className="flex flex-col mt-7">
                        <label className="mb-1" htmlFor="">Category</label>
                        <select className="border px-3 py-2.5 outline-none" name="" id="">
                            <option value="">Travel Destinations</option>       
                            <option value="">Festivals and Celebrations</option>       
                            <option value="">Adventure and Exploration</option>       
                            <option value="">Art and Creativity</option>       
                            <option value="">Tech Reviews</option>       
                            <option value="">Technology Trends</option>       
                        </select>
                    </div>
                    <div className="flex flex-col mt-7">
                        <label className="mb-1" htmlFor="">Short Description</label>
                        <input className="border px-3 py-2.5 outline-none" type="text" name="" id="" placeholder="Enter your blog image URL" />
                    </div>
                    <div className="flex flex-col mt-7">
                        <label className="mb-1" htmlFor="">Long Description</label>
                        <textarea name="longDescription" className="border resize-none h-36 outline-none"></textarea>
                    </div>

                    <Button type="submit" style={{background: '#588157', color: 'white', fontWeight: '600', marginTop: '30px'}} variant="solid" className="w-full h-12 text-base font-medium font-fontNoto">Post Blog</Button>
                </form>

            </div>
        </div>
    );
};

export default AddBlog;
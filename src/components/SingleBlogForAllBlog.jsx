import { Button } from "@mui/material";
import { FiBookmark } from 'react-icons/fi';
const SingleBlogForAllBlog = ({singleBlog}) => {
    const {blogTitle, blogImage, category, shortDescription} = singleBlog;
    return (
        <div className="border p-5 rounded-lg">
                    <img className="rounded-md" src={blogImage} alt="" />
                    <div className="mt-4">
                        <h3 className="text-xl font-medium">{blogTitle}</h3>
                        <div className="mt-3.5">
                        <p className="text-base inline px-3 py-1 font-medium bg-[#588157] text-white rounded-sm">{category}</p>
                        </div>
                        <p className="text-sm mt-4">{shortDescription?.length > 150 ? shortDescription?.slice(0, 150) + '...' : shortDescription}</p>
                        <div className="mt-5 flex justify-between">
                            <Button variant="solid" style={{background: '#588157', color: 'white'}} className="bg-[#3A5A40] px-5 py-2 text-white rounded-md">Read More</Button>
                            <Button style={{border: '1px solid #3A5A40'}} variant="outline" className="bg-[#588157] flex gap-2 items-center px-5 font-medium py-2 text-white rounded-md">
                                <FiBookmark></FiBookmark>
                                <span className="text-[#3A5A40] font-medium">Wishlist</span>
                            </Button>
                        </div>
                    </div>
                </div>
    );
};

export default SingleBlogForAllBlog;
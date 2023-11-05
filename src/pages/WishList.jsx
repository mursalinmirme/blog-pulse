import { Button } from '@mui/material';
import { FiBookmark } from 'react-icons/fi';

const Remove = () => {
    const desc = `Embark on a virtual journey to some of the most stunning and lesser-known places on our planet. We'll take you to tranquil beaches, enchanting forests, and scenic landscapes that will leave you in awe. Get ready for a visual feast of natural beauty!`;
    return (
        <div className="mt-20 w-10/12 mx-auto">
            <h2 className="text-center text-2xl font-semibold">My Wishlist</h2>
            <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="border p-5 rounded-lg">
                    <img className="rounded-md" src="https://i.ibb.co/4KZkYy5/ireland.webp" alt="" />
                    <div className="mt-4">
                        <h3 className="text-xl font-medium">Hidden Gems: 10 Beautiful Places You Must Visit</h3>
                        <div className="mt-3.5">
                        <p className="text-base inline px-3 py-1 font-medium bg-[#588157] text-white rounded-sm">Travel</p>
                        </div>
                        <p className="text-sm mt-4">{desc.length > 150 ? desc.slice(0, 150) + '...' : desc}</p>
                        <div className="mt-5 flex justify-between">
                            <Button variant="solid" style={{background: '#588157', color: 'white'}} className="bg-[#3A5A40] px-5 py-2 text-white rounded-md">View Details</Button>
                            <Button style={{border: '1px solid #3A5A40'}} variant="outline" className="bg-[#588157] flex gap-2 items-center px-5 font-medium py-2 text-white rounded-md">
                                <FiBookmark></FiBookmark>
                                <span className="text-[#3A5A40] font-medium">Remove</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="border p-5">
                    <img src="https://i.ibb.co/4KZkYy5/ireland.webp" alt="" />
                    <div className="mt-4">
                        <h3 className="text-xl font-medium">Hidden Gems: 10 Beautiful Places You Must Visit</h3>
                        <div className="mt-3.5">
                        <p className="text-base inline px-3 py-1 font-medium bg-[#588157] text-white rounded-sm">Travel</p>
                        </div>
                        <p className="text-sm mt-4">{desc.length > 150 ? desc.slice(0, 150) + '...' : desc}</p>
                        <div className="mt-5 flex justify-between">
                            <Button variant="solid" style={{background: '#588157', color: 'white'}} className="bg-[#3A5A40] px-5 py-2 text-white rounded-md">View Details</Button>
                            <Button style={{border: '1px solid #3A5A40'}} variant="outline" className="bg-[#588157] flex gap-2 items-center px-5 font-medium py-2 text-white rounded-md">
                                <FiBookmark></FiBookmark>
                                <span className="text-[#3A5A40] font-medium">Remove</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="border p-5">
                    <img src="https://i.ibb.co/4KZkYy5/ireland.webp" alt="" />
                    <div className="mt-4">
                        <h3 className="text-xl font-medium">Hidden Gems: 10 Beautiful Places You Must Visit</h3>
                        <div className="mt-3.5">
                        <p className="text-base inline px-3 py-1 font-medium bg-[#588157] text-white rounded-sm">Travel</p>
                        </div>
                        <p className="text-sm mt-4">{desc.length > 150 ? desc.slice(0, 150) + '...' : desc}</p>
                        <div className="mt-5 flex justify-between">
                            <Button variant="solid" style={{background: '#588157', color: 'white'}} className="bg-[#3A5A40] px-5 py-2 text-white rounded-md">View Details</Button>
                            <Button style={{border: '1px solid #3A5A40'}} variant="outline" className="bg-[#588157] flex gap-2 items-center px-5 font-medium py-2 text-white rounded-md">
                                <FiBookmark></FiBookmark>
                                <span className="text-[#3A5A40] font-medium">Remove</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="border p-5">
                    <img src="https://i.ibb.co/4KZkYy5/ireland.webp" alt="" />
                    <div className="mt-4">
                        <h3 className="text-xl font-medium">Hidden Gems: 10 Beautiful Places You Must Visit</h3>
                        <div className="mt-3.5">
                        <p className="text-base inline px-3 py-1 font-medium bg-[#588157] text-white rounded-sm">Travel</p>
                        </div>
                        <p className="text-sm mt-4">{desc.length > 150 ? desc.slice(0, 150) + '...' : desc}</p>
                        <div className="mt-5 flex justify-between">
                            <Button variant="solid" style={{background: '#588157', color: 'white'}} className="bg-[#3A5A40] px-5 py-2 text-white rounded-md">View Details</Button>
                            <Button style={{border: '1px solid #3A5A40'}} variant="outline" className="bg-[#588157] flex gap-2 items-center px-5 font-medium py-2 text-white rounded-md">
                                <FiBookmark></FiBookmark>
                                <span className="text-[#3A5A40] font-medium">Remove</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="border p-5">
                    <img src="https://i.ibb.co/4KZkYy5/ireland.webp" alt="" />
                    <div className="mt-4">
                        <h3 className="text-xl font-medium">Hidden Gems: 10 Beautiful Places You Must Visit</h3>
                        <div className="mt-3.5">
                        <p className="text-base inline px-3 py-1 font-medium bg-[#588157] text-white rounded-sm">Travel</p>
                        </div>
                        <p className="text-sm mt-4">{desc.length > 150 ? desc.slice(0, 150) + '...' : desc}</p>
                        <div className="mt-5 flex justify-between">
                            <Button variant="solid" style={{background: '#588157', color: 'white'}} className="bg-[#3A5A40] px-5 py-2 text-white rounded-md">View Details</Button>
                            <Button style={{border: '1px solid #3A5A40'}} variant="outline" className="bg-[#588157] flex gap-2 items-center px-5 font-medium py-2 text-white rounded-md">
                                <FiBookmark></FiBookmark>
                                <span className="text-[#3A5A40] font-medium">Remove</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="border p-5">
                    <img src="https://i.ibb.co/4KZkYy5/ireland.webp" alt="" />
                    <div className="mt-4">
                        <h3 className="text-xl font-medium">Hidden Gems: 10 Beautiful Places You Must Visit</h3>
                        <div className="mt-3.5">
                        <p className="text-base inline px-3 py-1 font-medium bg-[#588157] text-white rounded-sm">Travel</p>
                        </div>
                        <p className="text-sm mt-4">{desc.length > 150 ? desc.slice(0, 150) + '...' : desc}</p>
                        <div className="mt-5 flex justify-between">
                            <Button variant="solid" style={{background: '#588157', color: 'white'}} className="bg-[#3A5A40] px-5 py-2 text-white rounded-md">View Details</Button>
                            <Button style={{border: '1px solid #3A5A40'}} variant="outline" className="bg-[#588157] flex gap-2 items-center px-5 font-medium py-2 text-white rounded-md">
                                <FiBookmark></FiBookmark>
                                <span className="text-[#3A5A40] font-medium">Remove</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Remove;
import bannerBg from '../assets/bannerBg.jpg';
const Banner = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='relative'>
            <img src={bannerBg} alt="" />
            <div className='absolute flex justify-center items-center w-full h-full top-0 left-0 bg-[#58815795]'>
                <div className=''>
                <h2 style={{textShadow: '-1px 2px 4px rgba(58,90,64,0.42)'}} className='text-white text-6xl font-bold leading-relaxed text-center'>From Start to Finish: The Art of Writing <br /> Impactful Blog Articles</h2>
                <p style={{textShadow: '-1px 3px 5px rgba(58,90,64,0.72)'}} className='text-white w-1/2 text-center mx-auto mt-5'>Discover the Digital Frontier: Your Gateway to Tech, Design, and Innovation. Explore our blog for insights, tutorials, and the latest in the world of technology</p>
                <div className='text-center'>
                <button className='bg-[#344E41] text-white rounded-md px-8 py-3 text-lg mt-8 font-medium hover:bg-[#588157] hover:border'>Discover</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;
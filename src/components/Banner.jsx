import bannerBg from '../assets/bannerBg.jpg';
import { motion } from "framer-motion"
const Banner = () => {
    return (
        <motion.div className='max-w-screen-2xl mx-auto'
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        >
            <div className='relative'>
            <img className='h-[650px] md:h-[550px] lg:h-auto object-cover' src={bannerBg} alt="" />
            <div className='absolute flex justify-center items-center w-full h-full top-0 left-0 bg-[#58815795]'>
                <div className=''>
                <h2 style={{textShadow: '-1px 2px 4px rgba(58,90,64,0.42)'}} className='text-white text-4xl ml-5 md:ml-0 lg:text-6xl font-bold leading-relaxed lg:leading-relaxed md:text-center'>From Start to Finish The Art of Writing <br /> Impactful Blog Articles</h2>
                <div className='w-full'>
                <p style={{textShadow: '-1px 3px 5px rgba(58,90,64,0.72)'}} className='text-white ml-5 md:text-center md:w-8/12 md:mx-auto lg:w-1/2 lg:mx-auto mt-5 pr-5 md:pr-0 leading-relaxed'>Discover the Digital Frontier: Your Gateway to Tech, Design, and Innovation. Explore our blog for insights, tutorials, and the latest in the world of technology</p>
                </div>
                <div className='ml-5 md:ml-0 md:text-center'>
                <button className='bg-[#344E41] text-white rounded-md px-8 py-3 text-lg mt-8 font-medium hover:bg-[#588157] hover:border'>Discover</button>
                </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Banner;
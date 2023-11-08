import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import footerBg from '../assets/footerbg.jpg';
import { motion } from "framer-motion"
const Footer = () => {
  return (
    <motion.div className="mt-20 max-w-screen-2xl mx-auto relative"
    initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    >
      <img className='h-[1000px] lg:h-[400px] w-full object-cover' src={footerBg} alt="" />
      <div className='w-full h-full bg-[#3a5a40ea] absolute top-0 left-0'>
        <div className='w-10/12 mx-auto flex flex-col lg:flex-row justify-between gap-7 pt-24'>
          {/* brand and social icons */}
           <div className='text-white flex-1'>
              <h2 className='text-2xl uppercase font-fontNoto font-bold'>Blog<span className='text-[#ccf97f]'>Pulse</span></h2>
              <p className='text-sm mt-5 leading-relaxed w-5/6'>Our mission is to empower bloggers and content creators with insights, tips, and inspiration. Join our community of wordsmiths and digital storytellers. </p>
           </div>
           <div className='flex-1 text-white'>
            <h3 className='text-lg font-semibold'>Categories</h3>
            <div className='w-10/12'>
              <div className='flex justify-between px-5 py-2 bg-[#A3B18A] text-black font-medium mt-5'>
                <span>Hidden Gems</span>
                <span>4</span>
              </div>
              <div className='flex justify-between px-5 py-2 bg-[#A3B18A] text-black font-medium mt-5'>
                <span>Cultural Fusion</span>
                <span>4</span>
              </div>
              <div className='flex justify-between px-5 py-2 bg-[#A3B18A] text-black font-medium mt-5'>
                <span>Travel</span>
                <span>3</span>
              </div>
            </div>
           </div>
           <div className='flex-1 text-white'>
            <h3 className='text-lg font-semibold'>Resources</h3>
            <ul className='list-none mt-5 text-sm space-y-4'>
              <li className='flex items-center gap-2'>
                <span>Top Rated Writter</span>
              </li>
              <li className='flex items-center gap-2'>
                <span>Expert Researchers</span>
              </li>
              <li className='flex items-center gap-2'>
                <span>Blog collections</span>
              </li>
              <li className='flex items-center gap-2'>
                <span>Blog Manage</span>
              </li>
              <li className='flex items-center gap-2'>
                <span>Copyrighter</span>
              </li>
            </ul>
           </div>
           <div className='flex-1 text-white'>
            <h3 className='text-lg font-semibold'>Social Media</h3>
            <p className='text-sm mt-5'>Join with our active social media</p>
            <div className='flex gap-4'>
              <a className='w-10 mt-5 text-black h-10 bg-white text-2xl flex justify-center items-center' href="#"><FiFacebook className='text-blue-800'></FiFacebook></a>
              <a className='w-10 mt-5 text-black h-10 bg-white text-2xl flex justify-center items-center' href="#"><FiInstagram className='text-orange-700'></FiInstagram></a>
              <a className='w-10 mt-5 text-black h-10 bg-white text-2xl flex justify-center items-center' href="#"><FiTwitter className='text-sky-800'></FiTwitter></a>
              <a className='w-10 mt-5 text-black h-10 bg-white text-2xl flex justify-center items-center' href="#"><FiLinkedin className='text-sky-900'></FiLinkedin></a>
              <a className='w-10 mt-5 text-black h-10 bg-white text-2xl flex justify-center items-center' href="#"><FiGithub></FiGithub></a>

            </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
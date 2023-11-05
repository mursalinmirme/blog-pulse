import { Button } from '@mui/material';
import newsletter from '../assets/newsletter.jpg';

const NewsLetter = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className="w-10/12 mx-auto border mt-20 relative h-96">
           <img className='h-full w-full object-cover' src={newsletter} alt="" />
           <div className='absolute top-0 bg-[#588157c7] w-full h-full flex justify-center items-center'>
            <div className='text-white'>
            <h4 style={{textShadow: '-1px 3px 5px rgba(58,90,64,0.72)'}} className='text-4xl text-center font-semibold font-fontNoto'>Stay Informed with Our Newsletter</h4>
            <p style={{textShadow: '-1px 3px 5px rgba(58,90,64,0.72)'}} className='w-3/5 px-10 mx-auto text-center text-sm mt-5 font-fontNoto'>Subscribe to our newsletter and join our community of readers. Get the latest updates, insights, and exclusive content delivered directly to your inbox.</p>
            <div className='w-1/2 mx-auto mt-20 relative'>
                <input className='w-full pl-5 py-3.5 rounded-full pr-32 text-black outline-none' type="email" name="" id="" placeholder='Enter your email' />
                <Button style={{background: '#344E41', position: 'absolute', right: 0, height: '100%', color: '#FFFFFF', borderRadius: '0 25px 25px 0', outline: 'none'}} variant='solid'>Subscribe</Button>
            </div>
            </div>
           </div>
        </div>
        </div>
    );
};

export default NewsLetter;
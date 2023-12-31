import { motion } from "framer-motion";
import ReactStarsRating from "react-awesome-stars-rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import blogger from "../assets/blogger.jpg";
import bloggerFour from "../assets/bloggerFour.jpg";
import bloggerThree from "../assets/bloggerThree.jpg";
import bloggerTwo from "../assets/bloggerTwo.jpg";
const TopBlogger = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <motion.div
      className="w-full lg:w-10/12 mx-auto"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-center mt-16 text-2xl lg:text-3xl font-semibold">
        Top Bloggers Spotlight
      </h3>
      <p className="text-center mt-4 text-sm w-11/12 md:w-9/12 lg:w-1/2 leading-relaxed mx-auto">
        Celebrating the Voices That Inspire. Dive into the world of our standout
        bloggers as we shine a light on their remarkable journeys, captivating
        stories.
      </p>
      <div className="mt-10">
        <Slider {...settings}>
          {/* topper 1 */}
          <div className="px-4">
            <div className="border p-5 rounded-md">
              <img className="h-[350px] w-full" src={blogger} alt="" />
              <h3 className="text-2xl font-semibold mt-4">Alex Johnson</h3>
              <p className="text-lg mt-1">Total Blogs: 13</p>
              <h6 className="text-lg mt-1">Position: 01</h6>
              <div className="flex items-center mt-1">
                <ReactStarsRating className="flex" size={20} value={5.0} />
                <span>(5.00)</span>
              </div>
            </div>
          </div>
          {/* topper 2 */}
          <div className="px-4">
            <div className="border p-5 rounded-md">
              <img className="h-[350px] w-full" src={bloggerTwo} alt="" />
              <h3 className="text-2xl font-semibold mt-4">Michael Williams</h3>
              <p className="text-lg mt-1">Total Blogs: 10</p>
              <h6 className="text-lg mt-1">Position: 02</h6>
              <div className="flex items-center mt-1">
                <ReactStarsRating
                  className="flex"
                  size={20}
                  isEdit={false}
                  value={4.8}
                />
                <span>(4.8)</span>
              </div>
            </div>
          </div>
          {/* topper 3 */}
          <div className="px-4">
            <div className="border p-5 rounded-md">
              <img className="h-[350px] w-full" src={bloggerThree} alt="" />
              <h3 className="text-2xl font-semibold mt-4">Benjamin Clark</h3>
              <p className="text-lg mt-1">Total Blogs: 08</p>
              <h6 className="text-lg mt-1">Position: 03</h6>
              <div className="flex items-center mt-1">
                <ReactStarsRating className="flex" size={20} value={4.7} />
                <span>(4.7)</span>
              </div>
            </div>
          </div>
          {/* topper 4 */}
          <div className="px-4">
            <div className="border p-5 rounded-md">
              <img className="h-[350px] w-full" src={bloggerFour} alt="" />
              <h3 className="text-2xl font-semibold mt-4">Matthew Harris</h3>
              <p className="text-lg mt-1">Total Blogs: 07</p>
              <h6 className="text-lg mt-1">Position: 04</h6>
              <div className="flex items-center mt-1">
                <ReactStarsRating className="flex" size={20} value={4.6} />
                <span>(4.6)</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </motion.div>
  );
};

export default TopBlogger;

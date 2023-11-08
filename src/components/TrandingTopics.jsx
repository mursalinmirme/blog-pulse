import tranding from "../assets/tranding.jpg";
import trandingTwo from "../assets/trandingTwo.jpg";
import trandingThree from "../assets/trandingThree.jpg";
import trandingFour from "../assets/trandingFour.jpg";
import { FiArrowRight } from 'react-icons/fi';
import Slider from 'react-slick';
const TrandingTopics = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className="mt-20 w-11/12 lg:w-10/12 mx-auto">
            <h3 className="text-2xl md:text-3xl text-center font-semibold">Tranding Topics</h3>
            <p className="text-sm mt-3 w-11/12 md:w-9/12 lg:w-1/2 mx-auto px-5 leading-relaxed text-center">Dive into the latest trends and hot discussions in the blogosphere with our Trending Topics section.</p>
            <div className="mt-10">
            <Slider {...settings}>
            {/* topic 1 */}
            <div className="p-2 lg:px-4">
                <img className="h-[260px] w-full" src={tranding} alt="" />
                <div className="border p-5 rounded-md">
                    <h6 className="text-lg mt-1 font-medium">Tag: Travel</h6>
                    <h3 className="text-2xl font-semibold mt-3 text-[#3A5A40]">Topic: Sustainable Travel</h3>
                    <p className="text-lg mt-1">Explore eco-friendly travel options and destinations that promote sustainable tourism...</p>
                    <div className="flex justify-end">
                       <span className="w-8 h-8 flex justify-center items-center rounded-full border border-[#3A5A40]">
                       <FiArrowRight className="text-xl"></FiArrowRight>
                       </span>
                    </div>
                </div>
            </div>
            {/* topic 2 */}
            <div className="p-2 lg:px-4">
            <img className="h-[260px] w-full" src={trandingTwo} alt="" />
                <div className="border p-5 rounded-md">
                    <h6 className="text-lg mt-1">Tag: Finance</h6>
                    <h3 className="text-2xl font-semibold mt-3 text-[#3A5A40]">Topic: Crypto trading</h3>
                    <p className="text-lg mt-1 hidden md:block">Uncover the latest news and insights into the world of cryptocurrencies and blockchain technology...</p>
                    <p className="text-lg mt-1 md:hidden">Uncover the latest news and insights into the world of crypto and blockchain technology...</p>
                    <div className="flex justify-end">
                       <span className="w-8 h-8 flex justify-center items-center rounded-full border border-[#3A5A40]">
                       <FiArrowRight className="text-xl"></FiArrowRight>
                       </span>
                    </div>
                </div>
            </div>
            {/* topic 3 */}
            <div className="p-2 lg:px-4">
            <img className="h-[260px] w-full" src={trandingThree} alt="" />
                <div className="border p-5 rounded-md">
                    <h6 className="text-lg mt-1">Tag: Science</h6>
                    <h3 className="text-2xl font-semibold mt-3 text-[#3A5A40]">Topic: Mars Research</h3>
                    <p className="text-lg mt-1">Explore the latest discoveries and missions related to Mars research and exploration of Mars...</p>
                    <div className="flex justify-end">
                       <span className="w-8 h-8 flex justify-center items-center rounded-full border border-[#3A5A40]">
                       <FiArrowRight className="text-xl"></FiArrowRight>
                       </span>
                    </div>
                </div>
            </div>
            {/* topic 4 */}
            <div className="p-2 lg:px-4">
            <img className="h-[260px] w-full" src={trandingFour} alt="" />
                <div className="border p-5 rounded-md">
                    <h6 className="text-lg mt-1">Tag: Heritage</h6>
                    <h3 className="text-2xl font-semibold mt-3 text-[#3A5A40]">Topic: Cultural Heritage</h3>
                    <p className="text-lg mt-1">Join in the celebrations of cultural heritage and traditions from different corners of the globe...</p>
                    <div className="flex justify-end">
                       <span className="w-8 h-8 flex justify-center items-center rounded-full border border-[#3A5A40]">
                       <FiArrowRight className="text-xl"></FiArrowRight>
                       </span>
                    </div>
                </div>
            </div>
            
           
            </Slider>
            </div>
        </div>
    );
};

export default TrandingTopics;
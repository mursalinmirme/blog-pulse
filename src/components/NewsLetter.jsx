import { Button } from "@mui/material";
import toast from "react-hot-toast";
import newsletter from "../assets/newsletter.jpg";
import { motion } from "framer-motion"
const NewsLetter = () => {
  const handleNewLetter = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email !== "") {
      toast.success("Thank you for subscribing to our newsletter");
      e.target.reset();
    }
  };
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-11/12 lg:w-10/12 mx-auto border mt-20 relative h-96">
          <img className="h-full w-full object-cover" src={newsletter} alt="" />
          <div className="absolute top-0 bg-[#588157c7] w-full h-full flex justify-center items-center">
            <div className="text-white">
              <h4
                style={{ textShadow: "-1px 3px 5px rgba(58,90,64,0.72)" }}
                className="text-2xl md:text-4xl text-center font-semibold font-fontNoto"
              >
                Stay Informed with Our Newsletter
              </h4>
              <p
                style={{ textShadow: "-1px 3px 5px rgba(58,90,64,0.72)" }}
                className="lg:w-3/5 px-10 mx-auto text-center text-sm mt-5 font-fontNoto"
              >
                Subscribe to our newsletter and join our community of readers.
                Get the latest updates, insights, and exclusive content
                delivered directly to your inbox.
              </p>
              <div className="w-10/12 lg:w-1/2 mx-auto mt-20 relative">
                <form className="" onSubmit={handleNewLetter}>
                  <input
                    className="w-10/12 md:w-full pl-5 py-3.5 rounded-full pr-28 md:pr-32 text-black outline-none"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter your email"
                    required
                  />
                  <Button
                    type="submit"
                    style={{
                      background: "#344E41",
                      position: "absolute",
                      right: 0,
                      height: "100%",
                      color: "#FFFFFF",
                      borderRadius: "0 25px 25px 0",
                      outline: "none",
                    }}
                    variant="solid"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsLetter;

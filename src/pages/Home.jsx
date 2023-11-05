import TopBlogger from "../components/TopBlogger";
import TrandingTopics from "../components/TrandingTopics";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <NewsLetter></NewsLetter>
            <TopBlogger></TopBlogger>
            <TrandingTopics></TrandingTopics>
        </div>
    );
};

export default Home;
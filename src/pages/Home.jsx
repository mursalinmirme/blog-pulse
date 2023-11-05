import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import RecentBlogs from "../components/RecentBlogs";
import TrandingTopics from "../components/TrandingTopics";
import TopBlogger from "../components/TopBlogger";

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
import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import RecentBlogs from "../components/RecentBlogs";
import TopBlogger from "../components/TopBlogger";
import TrandingTopics from "../components/TrandingTopics";

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

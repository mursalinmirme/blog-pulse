import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;
import Skeleton from "react-loading-skeleton";

const FeaturedBlogsSkeleton = () => {
  return (
    <div className="w-10/12 mx-auto mt-28">
      <div className="">
        <h3 className="mx-auto text-center mt-10">
          <Skeleton height={45} width={300}></Skeleton>
        </h3>
      </div>
      <div className="mt-5">
        <Skeleton height={60}></Skeleton>
      </div>
      <div className="mt-5">
        <Skeleton height={60}></Skeleton>
      </div>
      <div className="mt-5">
        <Skeleton height={60}></Skeleton>
      </div>
      <div className="mt-5">
        <Skeleton height={60}></Skeleton>
      </div>
      <div className="mt-5">
        <Skeleton height={60}></Skeleton>
      </div>
      <div className="mt-5">
        <Skeleton height={60}></Skeleton>
      </div>
      <div className="mt-5">
        <Skeleton height={60}></Skeleton>
      </div>
      <div className="mt-5">
        <Skeleton height={60}></Skeleton>
      </div>
      <div className="mt-5">
        <Skeleton height={60}></Skeleton>
      </div>
      <div className="mt-5">
        <Skeleton height={60}></Skeleton>
      </div>
    </div>
  );
};

export default FeaturedBlogsSkeleton;

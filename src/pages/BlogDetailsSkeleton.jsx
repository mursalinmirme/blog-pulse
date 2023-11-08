import Skeleton from "react-loading-skeleton";

const BlogDetailsSkeleton = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-4 gap-10">
                <div className="col-span-3">
                <div>
                <Skeleton height={500}></Skeleton>
                </div>
                <div className="mt-8">
                <Skeleton height={100}></Skeleton>
                </div>
                <div className="mt-5">
                <Skeleton width={220} height={50}></Skeleton>
                </div>
                <div className="mt-5">
                <Skeleton height={100}></Skeleton>
                </div>
                <div className="mt-5">
                <Skeleton width={230} height={50}></Skeleton>
                </div>
                <div className="mt-5">
                <Skeleton height={150}></Skeleton>
                </div>
                <div className="mt-5">
                <Skeleton width={200} height={50}></Skeleton>
                </div>
                </div>
                <div className="col-span-1">

                </div>
            </div>
        </div>
    );
};

export default BlogDetailsSkeleton;
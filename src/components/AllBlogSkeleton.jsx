import Skeleton from "react-loading-skeleton";

const AllBlogSkeleton = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between px-5">
        <h3 className="text-2xl font-semibold">
          <Skeleton width={120} height={35}></Skeleton>
        </h3>
        <div className="flex relative mt-5 md:mt-0">
          <form>
            <Skeleton width={300} height={35}></Skeleton>
          </form>
        </div>
        <div className="mt-5 md:mt-0">
          <Skeleton width={130} height={35}></Skeleton>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5">
            <Skeleton height={30}></Skeleton>
          </h3>
          <div className="mt-4">
            <Skeleton width={180}></Skeleton>
          </div>
          <p className="mt-3">
            <Skeleton height={70}></Skeleton>
          </p>
          <div className="flex justify-between mt-4">
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
          </div>
        </div>
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5">
            <Skeleton height={30}></Skeleton>
          </h3>
          <div className="mt-4">
            <Skeleton width={180}></Skeleton>
          </div>
          <p className="mt-3">
            <Skeleton height={70}></Skeleton>
          </p>
          <div className="flex justify-between mt-4">
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
          </div>
        </div>
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5">
            <Skeleton height={30}></Skeleton>
          </h3>
          <div className="mt-4">
            <Skeleton width={180}></Skeleton>
          </div>
          <p className="mt-3">
            <Skeleton height={70}></Skeleton>
          </p>
          <div className="flex justify-between mt-4">
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
          </div>
        </div>
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5">
            <Skeleton height={30}></Skeleton>
          </h3>
          <div className="mt-4">
            <Skeleton width={180}></Skeleton>
          </div>
          <p className="mt-3">
            <Skeleton height={70}></Skeleton>
          </p>
          <div className="flex justify-between mt-4">
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
          </div>
        </div>
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5">
            <Skeleton height={30}></Skeleton>
          </h3>
          <div className="mt-4">
            <Skeleton width={180}></Skeleton>
          </div>
          <p className="mt-3">
            <Skeleton height={70}></Skeleton>
          </p>
          <div className="flex justify-between mt-4">
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
          </div>
        </div>
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5">
            <Skeleton height={30}></Skeleton>
          </h3>
          <div className="mt-4">
            <Skeleton width={180}></Skeleton>
          </div>
          <p className="mt-3">
            <Skeleton height={70}></Skeleton>
          </p>
          <div className="flex justify-between mt-4">
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
            <button>
              <Skeleton height={40} width={100}></Skeleton>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogSkeleton;

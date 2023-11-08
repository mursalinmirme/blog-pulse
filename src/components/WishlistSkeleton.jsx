import Skeleton from "react-loading-skeleton";


const WishlistSkeleton = () => {
    return (
        <div className="w-11/12 mx-auto mt-20">
        <div className="mt-12">
            <div className="">
                <h3 className="w-1/2 mt-6 mx-auto"><Skeleton height={30}></Skeleton></h3>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5"><Skeleton height={30}></Skeleton></h3>
          <div className="mt-4"><Skeleton width={180}></Skeleton></div>
          <p className="mt-3"><Skeleton height={70}></Skeleton></p>
          <div className="flex justify-between mt-4">
            <button><Skeleton height={40} width={100}></Skeleton></button>
            <button><Skeleton height={40} width={100}></Skeleton></button>
          </div>
        </div>
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5"><Skeleton height={30}></Skeleton></h3>
          <div className="mt-4"><Skeleton width={180}></Skeleton></div>
          <p className="mt-3"><Skeleton height={70}></Skeleton></p>
          <div className="flex justify-between mt-4">
            <button><Skeleton height={40} width={100}></Skeleton></button>
            <button><Skeleton height={40} width={100}></Skeleton></button>
          </div>
        </div>
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5"><Skeleton height={30}></Skeleton></h3>
          <div className="mt-4"><Skeleton width={180}></Skeleton></div>
          <p className="mt-3"><Skeleton height={70}></Skeleton></p>
          <div className="flex justify-between mt-4">
            <button><Skeleton height={40} width={100}></Skeleton></button>
            <button><Skeleton height={40} width={100}></Skeleton></button>
          </div>
        </div>
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5"><Skeleton height={30}></Skeleton></h3>
          <div className="mt-4"><Skeleton width={180}></Skeleton></div>
          <p className="mt-3"><Skeleton height={70}></Skeleton></p>
          <div className="flex justify-between mt-4">
            <button><Skeleton height={40} width={100}></Skeleton></button>
            <button><Skeleton height={40} width={100}></Skeleton></button>
          </div>
        </div>
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5"><Skeleton height={30}></Skeleton></h3>
          <div className="mt-4"><Skeleton width={180}></Skeleton></div>
          <p className="mt-3"><Skeleton height={70}></Skeleton></p>
          <div className="flex justify-between mt-4">
            <button><Skeleton height={40} width={100}></Skeleton></button>
            <button><Skeleton height={40} width={100}></Skeleton></button>
          </div>
        </div>
        {/* skeleton 1 */}
        <div className="p-5">
          <div className="w-full">
            <Skeleton height={205}></Skeleton>
          </div>
          <h3 className="mt-5"><Skeleton height={30}></Skeleton></h3>
          <div className="mt-4"><Skeleton width={180}></Skeleton></div>
          <p className="mt-3"><Skeleton height={70}></Skeleton></p>
          <div className="flex justify-between mt-4">
            <button><Skeleton height={40} width={100}></Skeleton></button>
            <button><Skeleton height={40} width={100}></Skeleton></button>
          </div>
        </div>
      </div>
      </div>
    );
};

export default WishlistSkeleton;
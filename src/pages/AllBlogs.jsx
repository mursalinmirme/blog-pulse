import { Button, MenuItem, Select } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import AllBlogSkeleton from "../components/AllBlogSkeleton";
import SingleBlogForAllBlog from "../components/SingleBlogForAllBlog";
import useAxiosPublic from "../useHooks/useAxiosPublic";

const AllBlogs = () => {
  const [categoryValue, setcategoryValue] = useState("All");
  const [searchVal, setSearchVal] = useState(null);
  const [showBlogs, setShowBlogs] = useState([]);
  const axiosPublic = useAxiosPublic();
  // console.log('category value is:', categoryValue);
  const { data, isLoading } = useQuery({
    queryKey: [categoryValue],
    queryFn: async () => {
      const fetch = await axiosPublic.get(
        `/allblogs?display=${categoryValue}`
      );
      const data = await fetch.data;
      setShowBlogs(data);
      return data;
    },
  });

  const { data: category, isLoading: categoriLoding } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const cateFatch = await axiosPublic.get("/categories");
      const categori = await cateFatch.data;
      return categori;
    },
  });
  // search system
  const { data: searchResult, isLoading: searchLoading } = useQuery({
    queryKey: [searchVal, setSearchVal],
    queryFn: async () => {
      if (searchVal) {
        const searchBlogFatch = await axiosPublic.get(
          `/searchBlog?search=${searchVal}`
        );
        const searchBlog = await searchBlogFatch.data;
        setShowBlogs(searchBlog);
        return searchBlog;
      }
      return [];
    },
  });
  console.log("Show blogs are", showBlogs);
  const handleSearchSystem = (e) => {
    // setSearchVal('')
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearchVal(searchValue);
  };

  const handleCategoryVlue = (event) => {
    setSearchVal("");
    setcategoryValue(event.target.value);
  };
  if (searchLoading) {
    return <AllBlogSkeleton></AllBlogSkeleton>;
  }
  if (isLoading) {
    return <AllBlogSkeleton></AllBlogSkeleton>;
  }
  return (
    <div className="mt-20 w-10/12 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h3 className="text-2xl font-semibold">All Blogs </h3>
        <div className="flex relative mt-5 md:mt-0">
          <form onSubmit={handleSearchSystem}>
            <input
              className="px-4 py-3 border border-gray-500 w-80 md:w-96 outline-none"
              type="text"
              name="search"
              id=""
              placeholder="Search a blog"
            />
            <Button
              type="submit"
              style={{
                background: "#A3B18A",
                color: "white",
                borderRadius: "0",
                position: "absolute",
                right: "0",
                top: "0",
                height: "100%",
                paddign: "-2px",
              }}
              className="w-20 flex justify-center items-center"
            >
              Search
            </Button>
          </form>
        </div>
        <div className="mt-5 md:mt-0">
          {/* <FormControl sx={{ m: 1, width: 'auto' }}> */}
          <Select
            value={categoryValue}
            // onChange={(event) => setcategoryValue(event.target.value)}
            onChange={handleCategoryVlue}
          >
            <MenuItem value={"All"}>All</MenuItem>
            {category?.map((cate, indx) => {
              return (
                <MenuItem key={cate._id} value={cate.name}>
                  {cate.name}
                </MenuItem>
              );
            })}
          </Select>
          {/* </FormControl> */}
        </div>
      </div>
      {showBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-10">
          {showBlogs?.map((singleBlog) => (
            <SingleBlogForAllBlog
              key={singleBlog._id}
              singleBlog={singleBlog}
            ></SingleBlogForAllBlog>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-96">
          <h3 className="text-3xl w-full text-center">
            No, data found to your search result!
          </h3>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
